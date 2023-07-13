import { createContext, useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';

import { githubServices } from '@/services';
import { markdown } from '@/utils/markdown';
import type { Issue, MarkupIssue } from '@/types';

const ISSUE_ACTION_TYPE = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  END: 'end',
} as const;

type IssueContextProps = {
  children: React.ReactNode;
};

type IssueStateContextType = {
  issue: Partial<MarkupIssue>;
  isLoading: boolean;
  error: string;
};

type ActionType = {
  type: (typeof ISSUE_ACTION_TYPE)[keyof typeof ISSUE_ACTION_TYPE];
  issue: Partial<MarkupIssue>;
  error: string;
};

const initialState: IssueStateContextType = {
  issue: {},
  isLoading: false,
  error: '',
};

const IssueStateContext = createContext(initialState);

const issueReducer = (state: IssueStateContextType, action: ActionType) => {
  switch (action.type) {
    case ISSUE_ACTION_TYPE.LOADING:
      return { ...state, isLoading: true };
    case ISSUE_ACTION_TYPE.SUCCESS:
      return { ...state, isLoading: false, issue: action.issue };
    case ISSUE_ACTION_TYPE.ERROR:
      return { ...state, isLoading: false, error: action.error };
    case ISSUE_ACTION_TYPE.END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const useIssue = () => useContext(IssueStateContext);

export const IssueContextProvider = ({ children }: IssueContextProps) => {
  const { org = '', repo = '', issueNumber = -1 } = useParams();
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ ...state, type: ISSUE_ACTION_TYPE.LOADING });

      try {
        const issue = await githubServices.getIssue(org, repo, +issueNumber);
        const markup = await markdown.parse(issue.body);

        dispatch({ ...state, type: ISSUE_ACTION_TYPE.SUCCESS, issue: { ...issue, markup } });
      } catch (err) {
        if (isAxiosError<Issue>(err) || err instanceof Error) {
          dispatch({ ...state, type: ISSUE_ACTION_TYPE.ERROR, error: err.message });
        }
      } finally {
        dispatch({ ...state, type: ISSUE_ACTION_TYPE.END });
      }
    })();
  }, []);

  return <IssueStateContext.Provider value={state}>{children}</IssueStateContext.Provider>;
};
