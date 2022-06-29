# SearchView

filter기능을 적용한 검색페이지입니다.

> Note: .env파일이 필요합니다. 해당파일은 개인적으로 전달드립니다.

**Stack**

- React
- Typescript
- axios
- react-query
- react-hook-form
- emotion

## Getting Started

1. .env파일 생성
2. 설치

```
$ npm install
```

3. 실행

```
$ npm run start
```

## Issue

- 선택된 필터 조건을 저장하기 위해 context api 적용

- Grid 뷰 / 목록 뷰 적용


## File structure

```
src
├── apis
│ ├── defaultAxios
│ ├── fetchs
│ └── querys // react-query적용
├── components
│ ├── club
│ ├── image
│ ├── input
│ └── layout
├── constants
│ └── filterContext
├── hooks
│ ├── useParamsToFilterContext // url의 params을 object로 변환
│ └── useSearchUrl // 선택된 필터 조건으로 params 생성
├── pages
│ ├── clubDetail
│ └── home
├── styles
├── types
└── clubType
```