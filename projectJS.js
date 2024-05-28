const listPic = document.querySelector('.photo_list');
const btn = document.querySelector('#showmore_btn');
let pageToPatch = 1;


btn.addEventListener('click', () => {
  fetchImages(pageToPatch += 1)
});

async function fetchImages(page) {
  try {
    const response = await fetch(`https://cataas.com/api/cats?skip=${3 * (pageToPatch++)}&limit=3`);

    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }

    // 제이슨 데이터를 자바스크립트 객체로 파싱
    const datas = await response.json();
    console.log(datas);
    makeImageList(datas);

  } catch (error) {
    console.error(error);
  }
}

function makeImageList(datas) {
  datas.forEach((data) => {
    listPic.insertAdjacentHTML('beforeend', `<li><img src="https://cataas.com/cat?_id=${data._id}" alt="" class="photo_list>img"></li>`);
  });
} //showmore


<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e88bce52ca6e37b55910343c1c061867"></script>
//지도 연결 링크

var mapContainer = document.getElementById('map'),
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption);


const modalOpenButton = document.getElementById('modal-open-btn');
const modalCloseButton = document.getElementById('modal-close-btn');
const modal = document.getElementById('modal_container');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
}); // 모달창 띄우기



  function scrollUp() {
  window.scrollTo(0, 0);
} // 최상단으로 이동하는 스크롤



