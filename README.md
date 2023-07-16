# Week 3-1

> 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 [과제](https://lean-mahogany-686.notion.site/Week3-7d5273c34cc748c8bae99479712cc71a)의 Best Pratice를 만들고 제출해주세요

![원티드 프리온보딩 프론트엔드 인턴십 배너 사진](https://static.wanted.co.kr/images/events/2909/b35918a6.jpg)

## 목표

> ([특정 깃헙 레파지토리](https://github.com/facebook/react/issues))의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 기본 사항

- 배포 링크 : [DEMO](https://pre-onboarding-11th-2-9.netlify.app/)
- 진행 기간 : 2023.07.11. ~ 2023.07.14.

## How To Run

```shell
$ git clone https://github.com/pre-onboarding-frontend-11th-team-9/pre-onboarding-11th-2-9.git
$ cd pre-onboarding-11th-2-9/
$ npm install
$ npm start
```

## Tech Stack

### 개발

- **React**
- **Context-API**
- **TypeScript**
- **styled-components**
- **axios**
- **react-router-dom**
- **remark**
- **remark-html**

## 구현 중점 사항

### 과제

#### 특정 깃헙 레파지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

### 폴더 구조

```
📦pre-onboarding-11th-2-9
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜ballTriangle.svg
 ┃ ┃ ┗ 📜notFound.jpg
 ┃ ┣ 📜index.html
 ┃ ┣ 📜robots.txt
 ┃ ┗ 📜_redirects
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜path.ts
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜issue.tsx
 ┃ ┃ ┗ 📜issues.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useScrollObserver.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Issues
 ┃ ┃ ┃ ┣ 📜AdImage.tsx
 ┃ ┃ ┃ ┣ 📜IssueItem.tsx
 ┃ ┃ ┃ ┗ 📜Issues.tsx
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜IssueDetail.tsx
 ┃ ┃ ┗ 📜Root.tsx
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜github.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜Global.style.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜issues.ts
 ┃ ┃ ┗ 📜styled.d.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜markdown.ts
 ┃ ┣ 📜App.tsx
 ┃ ┗ 📜index.tsx
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜README.old.md
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.paths.json
 ┗ 📜yarn.lock
```

<br/>

---

#### 접근 방법

- 깃허브에서 제공하는 REST API를 활용하여 레파지토리 이슈 목록을 가져왔다.
  - `/repos/${org}/${repo}/issues`
  - `/repos/${org}/${repo}/issue/${issueNumber}`
- API에 쿼리스트링을 작성하여 open 상태의 이슈 filter, 코멘트가 많은 순으로 정렬했다.
  - `/repos/${org}/${repo}/issues?state=open&sort=comments`
- UI에는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트수`를 이슈 목록을 표시했다.
- 이슈 목록 데이터를 map 메서드로 화면 UI를 구성할 때, idx를 활용하여 5번째 마다 `AdImage`를 추가 출력했다.
  - 이미지를 클릭할 경우 해당 페이지로 이동하도록 Anchor tag를 사용했다.
  ```tsx
  {
    issues.map((issue, idx) => (
      <Fragment key={issue.id}>
        {idx % 4 === 0 && idx !== 0 && <AdImage />}
        <IssueItem issue={issue} />
      </Fragment>
    ));
  }
  ```
- 인피티니 스크롤을 구현하기 위해 intersection Observer API를 사용했다.

  - 재사용을 위해, 커스텀 훅으로 구현했다.

    ```tsx
    import { useEffect, useRef } from 'react';

    export const useScrollObserver = (callback: () => void) => {
      const observerRef = useRef(null);

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) callback();
          });
        },
        { threshold: 0.7 },
      );

      useEffect(() => {
        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
      }, [observerRef.current]);

      return observerRef;
    };
    ```

  - 첫 화면 렌더링 시, 2번 fetch되는 이슈가 있어서, fetch 중이라면 observer가 참조하는 element가 화면에 표시하지 않게하여 중복 fetch되는 것을 막았다.
    ```tsx
    {
      isLoading ? <Loading /> : <SScrollObserver ref={ref} src="/images/ballTriangle.svg" alt="ballTriangle" />;
    }
    ```

---

<br/>

#### 접근 방법

- UI에는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문`를 이슈 목록을 표시했다.

---

<br/>

#### 접근 방법

- routes 구성시, 이슈 목록들을 화면에 표시하는 route는 `/:owner/:repo/issues`로 구성을 했고, 특정 이슈를 화면에 표시하는 route는 `/:owner/:repo/issues/:issueNumber`로 구성했다.
  - useParams를 활용하여 owner와 repo를 가져와 header에 출력했다.
  - 만약 owner 또는 repo 중 하나라도 undefined라면 `GitHub` 텍스트를 화면에 출력했다.

---

<br/>

#### 접근 방법

- route는 아래와 같이 구성하여 화면 기능을 구현했다.
  - context API를 제공하기 위한 `<IssuesContextProvider>, <IssueContextProvider>` Provider를 context를 사용하는 route에 추가로 작성했다.
  ```tsx
  export const routes = [
    {
      element: <Root />,
      path: PATH.ROOT,
      children: [
        {
          element: <Home />,
          path: PATH.HOME,
        },
        {
          element: (
            <IssuesContextProvider>
              <Issues />
            </IssuesContextProvider>
          ),
          path: PATH.ISSUES,
        },
        {
          element: (
            <IssueContextProvider>
              <IssueDetail />
            </IssueContextProvider>
          ),
          path: `${PATH.ISSUES}/:issueNumber`,
        },
        {
          element: <Error />,
          path: PATH.ERROR,
        },
      ],
    },
  ];
  ```
- Context API의 경우, 자체적인 API request를 통해 data fetch 이후, data를 사용하는 컴포넌트에 보내, props drilling과 추상화를 통한 가독성 향상을 위주로 작성했다.
  - 또한, data fetch에 필요한 쿼리스트링의 경우 context api를 호출하는 file 내부에 useParams를 활용해 parameters에 대한 사용자의 부담을 줄였다.
  - 또한, useContext와 IssueContext를 import하여 데이터를 얻지 않고, useIssue라는 커스텀 훅을 만들어 export 함으로써, 사용자가 useIssue와 Provider만 적절히 사용하면 데이터를 얻을 수 있도록 편의성을 위주로 구현했다.
  - 로딩과 에러 UI를 구현하기 위한 상태도 추가했다.
- 로딩화면의 경우, data fetch 마다 변경되는 `isLoading` 상태로 conditional rendering을 통해 로딩을 하도록 구현했다.
  - `Issues Page`, `IssueDetail Page`
- 에러화면의 경우, API 요청 실패, 잘못된 route 요청을 할 경우에 에러 UI를 표시했다.
  - route의 경우 `*` route를 통해 잘못된 route 요청은 에러 페이지를 render했다.
  - API 요청 실패시에는 if 조건문을 통해 error가 있는지 확인하여 에러 페이지를 render했다.
- API에 쿼리스트링을 작성하여 open 상태의 이슈 filter, 코멘트가 많은 순으로 정렬했다.
  - `/repos/${org}/${repo}/issues?state=open&sort=comments`
- 상태 변경에 따른 쉽게 스타일을 변경할 수 있도록 `styled-components`를 사용했다.

---

<br/>

#### 접근 방법

- 정적 타입 언어인 typescript를 사용하여, 컴파일 단계에서 오류를 검출하여 오류를 수정하고자 했다.
- Context API로 useIssue, useIssues 를 구현하여 추상화를 통한 사용자의 가독성을 향상시켰다.
- 상태 변경에 따른 쉽게 스타일을 변경할 수 있도록 `styled-components`를 사용했다.
- 페이지 이동시 페이지를 다시 로드하지 않고, URL을 기반으로 UI를 업데이트 할 수 있도록 SPA를 쉽게 구현하는데 사용했다.
- 마크 다운 라이브러리인 remark와 remark-html를 활용하여 markdown 문법을 htmlString으로 변환하고, 리액트에서 제공하는 dangerouslySetInnerHTML 속성을 활용하여 html을 삽입하여 render했다.

  ```ts
  export const markdown = {
    async parse(htmlString: string) {
      const { value } = await remark()
        .use(html as Plugin<[], Root, string>)
        .process(htmlString);

      return { __html: String(value) };
    },
  };
  ```

---

<br/>

#### 접근 방법

- `Fine-grained personal access tokens`으로 access-token을 발급했다.
  - `Personal access tokens (classic)`의 경우 모든 권한을 주기 때문에, gitHub에서 권장하는 `Fine-grained personal access tokens`를 사용하여 권한을 선택해서 부여하도록 했다.
  - access-token이 외부에 유출되지 않도록 .env 파일로 관리했으며, github에 유출되지 않도록 .gitignore 파일에도 해당 파일을 추적하지 않도록 했다.
  - 내가 배포한 사이트인 netlify의 경우 환경 변수를 지정할 수 있는 기능을 제공했기 때문에, 환경변수를 수동으로 직접 지정하여 배포 웹사이트에서 access-token을 접근할 수 있도록 했다.

---

## Team Info

| Name   | Github ID                                                                                                                                                                 | Role |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 김보라 | <a href="https://github.com/rockbell89" target="_blank"><img src="https://img.shields.io/badge/rockbell89-181717?style=flat-square&logo=github&logoColor=white"/></a>     | 팀장 |
| 김나현 | <a href="https://github.com/reezekim" target="_blank"><img src="https://img.shields.io/badge/reezekim-181717?style=flat-square&logo=github&logoColor=white"/></a>         |      |
| 이동규 | <a href="https://github.com/tenenger7125" target="_blank"><img src="https://img.shields.io/badge/tenenger7125-181717?style=flat-square&logo=github&logoColor=white"/></a> |      |
| 조은선 | <a href="https://github.com/es39" target="_blank"><img src="https://img.shields.io/badge/es39-181717?style=flat-square&logo=github&logoColor=white"/></a>                 |      |
