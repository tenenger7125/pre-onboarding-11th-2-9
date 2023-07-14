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

- [DEMO](https://wanted-challenge-7-blog.vercel.app/)

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

### 1. 요구사항

#### 이슈 목록 화면

- 이슈 목록 가져오기 API 활용
- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- 다섯번째 셀마다 광고 이미지 출력

  - 이미지
    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"/>

  - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동

- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

#### 접근 방법

- 깃허브에서 제공하는 REST API를 활용하여 레파지토리 이슈 목록을 가져왔다.
  - `/repos/${org}/${repo}/issues`
  - `/repos/${org}/${repo}/issue/${issueNumber}`
- API에 쿼리스트링을 작성하여 open 상태의 이슈 filter, 코멘트가 많은 순으로 정렬했다.
  - `/repos/${org}/${repo}/issues?state=open&sort=comments`
- UI에는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트수`를 이슈 목록을 표시했다.
- 이슈 목록 데이터를 map 메서드로 화면 UI를 구성할 때, idx를 활용하여 5번째 마다 `AdImage`를 추가 출력했다.
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

### 2. 요구사항

#### 이슈 상세 화면

> - 이슈의 상세 내용 표시
> - 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문 표시

#### 접근 방법

- UI에는 `이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문`를 이슈 목록을 표시했다.

---

<br/>

### 3. 요구사항

#### 공통 헤더

> - 두 페이지는 공통 헤더를 공유합니다.
> - 헤더에는 Organization Name / Repository Name이 표시됩니다.

#### 접근 방법

- routes 구성시, 이슈 목록들을 화면에 표시하는 route는 `/:owner/:repo/issues`로 구성을 했고, 특정 이슈를 화면에 표시하는 route는 `/:owner/:repo/issues/:issueNumber`로 구성했다.
  - useParams를 활용하여 owner와 repo를 가져와 header에 출력했다.
  - 만약 owner 또는 repo 중 하나라도 undefined라면 `GitHub` 텍스트를 화면에 출력했다.

---

<br/>

### 4. 요구사항

#### 필수 및 선택 요구 사항

> - 필수 사항
>   - 이슈 목록 및 상세 화면 기능 구현
>   - Context API를 활용한 API 연동
>   - 데이터 요청 중 로딩 표시
>   - 에러 화면 구현
>   - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
> - 선택 사항
>   - CSS-in-JS 적용

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

### 5. 개발 조건 및 환경

#### - GitHub REST API 사용

> - 언어 : JavaScript / TypeScript
> - 필수 기술: React, Context API
> - 선택 기술:
>   - Redux와 같은 전역 상태 관리 기술(toolkit 사용 가능, RTK-Query는 사용제한)
>   - 스타일 관련 라이브러리(styled-components, emotion, ui kit 등)
>   - 라우팅 관련 라이브러리(react-router-dom)
>   - HTTP Client(axios 등)
>   - 마크다운 렌더링 라이브러리
> - 위에 기재된 라이브러리 외 사용 불가

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

### 6. 참고사항

#### - GitHub REST API 사용

> - API
>   - [GitHub REST API](https://docs.github.com/en/rest)
>   - token을 발급하지 않으면 시간 당 60회로 API 호출 횟수 제한 됨
>   - 개발 시에는 access token을 발급받아 60회 제한 없이 개발 권장
>   - 이후 과제 제출 및 배포단계에서는 access token이 노출되지 않도록 주의
> - 와이어 프레임
>   <img src="https://lean-mahogany-686.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4dce1f3c-8939-4dbd-8568-e899d0ae91fc%2FUntitled.png?id=32732b3a-a57f-4631-9f54-664d6d4069df&table=block&spaceId=72b256b1-ae08-4e70-bb6c-f9c3cad5a793&width=1900&userId=&cache=v2" />

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
