import { createContext, useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';

import { githubServices } from '@/services';
import type { Issue } from '@/types';

const ISSUES_ACTION_TYPE = {
  NEXT_PAGE: 'nextPage',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
  END: 'end',
} as const;

const initialState: IssuesStateContextType = {
  issues: [],
  page: 1,
  isLoading: false,
  error: '',
  nextPage: () => {},
};

const IssuesStateContext = createContext(initialState);

const issuesReducer = (state: IssuesStateContextType, action: ActionType) => {
  switch (action.type) {
    case ISSUES_ACTION_TYPE.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case ISSUES_ACTION_TYPE.LOADING:
      return { ...state, isLoading: true };
    case ISSUES_ACTION_TYPE.SUCCESS:
      return { ...state, isLoading: false, issues: action.issues };
    case ISSUES_ACTION_TYPE.ERROR:
      return { ...state, isLoading: false, error: action.error };
    case ISSUES_ACTION_TYPE.END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const useIssues = () => useContext(IssuesStateContext);

export const IssuesContextProvider = ({ children }: IssuesContextProps) => {
  const { org = '', repo = '' } = useParams();
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  const nextPage = () => dispatch({ ...state, type: ISSUES_ACTION_TYPE.NEXT_PAGE });

  useEffect(() => {
    (async () => {
      dispatch({ ...state, type: ISSUES_ACTION_TYPE.LOADING });

      try {
        const newIssues = await githubServices.getIssues(org, repo, state.page);

        dispatch({ ...state, type: ISSUES_ACTION_TYPE.SUCCESS, issues: [...state.issues, ...newIssues] });
      } catch (err) {
        if (isAxiosError<Issue[]>(err) || err instanceof Error) {
          dispatch({ ...state, type: ISSUES_ACTION_TYPE.ERROR, error: err.message });
        }
      } finally {
        dispatch({ ...state, type: ISSUES_ACTION_TYPE.END });
      }
    })();
  }, [state.page]);

  return <IssuesStateContext.Provider value={{ ...state, nextPage }}>{children}</IssuesStateContext.Provider>;
};

type IssuesContextProps = {
  children: React.ReactNode;
};

type IssuesStateContextType = {
  issues: Issue[];
  page: number;
  isLoading: boolean;
  error: string;
  nextPage: () => void;
};

type ActionType = {
  type: (typeof ISSUES_ACTION_TYPE)[keyof typeof ISSUES_ACTION_TYPE];
  issues: Issue[];
  page: number;
  error: string;
};
