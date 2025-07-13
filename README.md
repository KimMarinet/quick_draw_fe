# quick_draw 프로젝트 -> FE 파트

### ➡️ 개요
- quick_draw의 FrontEnd 서버 기동을 위한 프로그램
- 브라우저에 표기될 부분 (React 활용)
- FE 서버에서 BE로 POST 진행 (자원 공유 설정 완료)

### ➡️ 기능 설명
- 메인 홈페이지 : 메인로고 및 페이지 이동
- quick_draw 홈페이지
  - 카테고리 내 단어 중 1개 랜덤으로 선택하여 제시어 표기
  - 사용자가 제시어를 보고 그림을 그릴 수 있는 Canvas
  - 이미지를 보고 예측한 결과를 표기

### ➡️ 코드 리뷰
- categories.js
  > key, value 형태의 데이터 중 랜덤을 1개를 반환

- Direction.js
  > **매개 변수로 전달받은 값**을 '제시어'로 표기

- Canvas.js
  > 사용자가 그림을 그리는 공간

- Result.js
  > 이미지 제출 혹은 재시도(onRefresh)
  > 이미지 제출 후 예측 결과 값을 표기 (PredictionBox)

#### ✅ Simple 코드 리뷰 이미지
![Class](https://github.com/KimMarinet/quick_draw_fe/blob/master/img/Class%20Diagram.png)

#### ✅ FE 구현 사진
![Class](https://github.com/KimMarinet/quick_draw_fe/blob/master/img/main.png)
<p align="center"><img src="https://github.com/KimMarinet/quick_draw_fe/blob/master/img/result1.png"/></p>
<p align="center"><img src="https://github.com/KimMarinet/quick_draw_fe/blob/master/img/result2.png"/></p>
