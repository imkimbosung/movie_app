# Movie App 2020

React JS Fundamaentals course (2019)


---
* github.io에 배포하는 방법

1. npm 패키지 다운로드   
 `npm i gh-pages` 

2. package.json 마지막 줄에 homepage 추가  
`"homepage": "https://{username}.github.io/{projectname}/"`

3. package.json 에 scrpits에 명령어 추가  
`"deploy": "gh-pages -d build",  
 "predeploy": "npm run build"`
    
- deploy는 build 폴더를 upload한다.  
(build 폴더를 얻는 방법 -> `npm run build`)  
- 내가 deploy를 호출하면 자동으로 predeploy가 호출된다. 이름은 같아야함
`npm run deploy`
