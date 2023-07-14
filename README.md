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
- **react-router-dom**
- **axios**
- **remark**
- **remark-html**
- **styled-components**
- **@craco**

## 구현 중점 사항

## 과제

### Next.js로 마크다운 블로그 만들기

- [DEMO](https://wanted-challenge-7-blog.vercel.app/)

### 폴더 구조

```
📦blog
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜next.svg
 ┃ ┗ 📜vercel.svg
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜Badge.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Meta.tsx
 ┃ ┃ ┣ 📜Text.tsx
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜path.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜hello.ts
 ┃ ┃ ┣ 📂posts
 ┃ ┃ ┃ ┗ 📜[postId].tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜_app.tsx
 ┃ ┃ ┗ 📜_document.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜common.ts
 ┃ ┃ ┣ 📜Global.style.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂types
 ┃ ┃ ┗ 📜styled.d.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜files.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜markdown.ts
 ┣ 📂__posts
 ┃ ┣ 📜post.md
 ┃ ┣ 📜post2.md
 ┃ ┣ 📜post3.md
 ┃ ┗ 📜post4.md
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

<br/>

---

### 1. 요구사항

#### Next.js로 마크다운으로 작성한 블로그를 정적 페이지(SSG)로 작성해주세요.

#### 접근 방법

- 정적 페이지로 구현하기 위해서는 getStaticPaths와 getStaticProps를 사용하면 정적 페이지를 만들 수 있다.
- 정적 페이지를 만들면, 사용자의 요청시 html를 보내주기 때문에 대기 시간을 줄이기 떄문에 사용자 경험을 향상시킬 수 있다.
- 또한, 서버에서 만들어진 html을 전송하기 때문에 서버 부하도 줄어든다.
- 다만, 자주 바뀌는 페이지의 경우에는 미리 만드는 의미가 없기 때문에 효과가 없다.

---

<br/>

### 2. 요구사항

#### 사용자는 루트 경로의 \_\_posts 폴더에 작성된 마크다운 파일(.md)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다. 아래는 마크다운에 jekyll에서 만든 frontmatter라는 문법(링크)을 적용한 예시입니다.

```
---
categories:
  - Development
  - VIM
date: "2012-04-06"
description: 설명을 적는 곳입니다
slug: spf13-vim-3-0-release-and-new-website
tags:
  - .vimrc
  - plugins
  - spf13-vim
  - vim
title: hello
---

## 예시입니다
- 예시입니다
```

#### 접근 방법

- 사용자는 \_\_posts에 마크 다운 파일을 생성하여 마크 다운 파일에 metaDat와 markdown 문법을 작성할 수 있다.
- 작성된 metaData와 markdown 문법을 화면에 표시하기 위한 방법을 생각해야한다.
- 우선 frontmatter라는 문법을 확인하여, `map` 메서드를 사용하고 type을 고려하여 프로퍼티 키를 중점적으로 확인했다.

---

<br/>

### 3. 요구사항

#### - 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.

> - `/` - 목록 페이지
> - `/[id]` - 상세 페이지
> - 마크다운을 JavaScript로 변환해주는 도구는 `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환) 을 참고
> - 각 마크다운의 meta data는 `gray-matter`, `frontmatter` 참고
> - 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML` 을 사용 ([참고 링크](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml))
> - (추가 구현) 코드 하이라이터는 `highlight.js`, `prism.js` 를 참고

#### 접근 방법

- 페이지의 경우 상수로 경로를 작성했다.
  - 📂constants > 📜path.ts
- Next.js 에서는 app router와 page router를 지원하는데, 안정성 이슈로 Next.js 12버전을 사용하는 기업이 있다는 것을 고려하여, page router로 페이지를 구현했다.
- 마크다운 파일을 parse하기 전에, 파일을 찾아 읽는 선행 작업이 우선되어야한다.
  - `path`, `fs` 내장 함수로 마크다운 파일의 폴더 경로를 찾아서, 파일들을 모두 읽는다.
  - 파일을 읽고 난 이후 remark 함수로 javascript 객체로 변환한다.
  - 변환된 javascript 객체에서 meta 데이터와 markdown 문법을 얻을 수 있다.
    - meta 데이터는 gray-matter 라이브러리를 사용한다.
    - 문자열로 된 markdown 문법은 remark-html 라이브러리를 사용한다.
  - meta 데이터를 gray-matter 라이브러리로 변환하면 javascript 객체로 변환된다.
  - 문자열인 markdown 문법은 remark-html 라이브러리를 사용하여 변환하면, html 마크업 언어로 변환된다.
  - html는 react의 문법중 하나인 dangerouslySetInnerHTML을 사용하여 삽입한다.
- 코드 하이라이터는 highlight.js, prism.js는 아직 구현하면 업데이트 해야겠다.
  - 정적 페이지에 스타일을 주려면 \_app.tsx파일 내부에 정의를 해야한다.
  - highlight.js와 useEffect를 사용하여 전체 코드 중 `<code>`를 찾아 자동으로 하이라이트 스타일을 주도록 했다.
    - 더 나은 방법이 있을거 같은데.... 더 연구를 해봐야겠다.
    - 서버에서 정적 페이지를 한번만 만들기 때문에, 렌더링 이후에 동작하는 useEffect가 실행되지 않는다...
    - 그래서 \_app.tsx 파일인 정적 페이지에서 실행하지 않고, CSR이 동작하는 페이지에 넣어줬다.
      - 깜빡거리긴하지만..... 일단 동작은 한다.

---

1. 이슈 목록 화면
   - 이슈 목록 가져오기 API 활용
   - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - 다섯번째 셀마다 광고 이미지 출력
     - 이미지
       <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"/>
       https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
     - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
   - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

GitHub REST API

## Team Info

| Name   | Github ID                                                                                                                                                                 | Role |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 김보라 | <a href="https://github.com/rockbell89" target="_blank"><img src="https://img.shields.io/badge/rockbell89-181717?style=flat-square&logo=github&logoColor=white"/></a>     | 팀장 |
| 김나현 | <a href="https://github.com/reezekim" target="_blank"><img src="https://img.shields.io/badge/reezekim-181717?style=flat-square&logo=github&logoColor=white"/></a>         |      |
| 이동규 | <a href="https://github.com/tenenger7125" target="_blank"><img src="https://img.shields.io/badge/tenenger7125-181717?style=flat-square&logo=github&logoColor=white"/></a> |      |
| 조은선 | <a href="https://github.com/es39" target="_blank"><img src="https://img.shields.io/badge/es39-181717?style=flat-square&logo=github&logoColor=white"/></a>                 |      |
