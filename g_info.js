function set_ginfo(g_name, ...value){
    const g_element = document.querySelector("#gginfo");
    let content = `<h1>${g_name}</h1>`;
    content = content + `<ul style="text-align: left">`
    for (let i=0; i<value.length; i++){
        content = content + `<li>${value[i]}</li>`;
    }
    content = content + `</ul>`
    g_element.innerHTML = content;
}

const glib = document.querySelector(".g_library_pos");
glib.onclick = function() {set_ginfo("도서관","1층\
- 제 1, 2, 3 열람실, 대학원 열람실, 사물함, 휴게실, 박물관","\
2층<br>\
- 연속간행물실, 만화책, 대출 반납실, 세미나실, 그룹스터디룸","\
3층<br>\
- 그룹 스터디룸","\
4층<br>\
- 전자정보실, 대출 반납 실, 그룹 스터디룸, 시청각실, c-square","\
5층<br>\
- 그룹 스터디룸, 무인 복사 코너");};

const gss = document.querySelector(".gss_pos");
gss.onclick = function(){
    set_ginfo("기숙사", "1관<br>\
    - 3인 1실 (2층침대 1개, 1층 침대 1개\)<br>\
    - 남/ 여 생활 공간 구분<br>\
    - 방 내부에서 신발 착용<br>\
    - 전체 구조 : 지상 9층, 지하 1층(조리실, 커뮤니티실, pc실\)<br>\
    - 기본 구비 물품: 책상, 옷장 , 침대, 신발장, 에어컨<br>\
    - 공용사용: 화장실, 샤워실, 냉장고(층별 구분\)<br><br>","\
    2관<br>\
    - 3인 1실 (2층침대 1개, 1층 침대 1개\)<br>\
    - 전체 구조: 지상 5층, 지하 1층 (기도실, 자율 카페 (브리꼴라쥬\)\)<br>\
    - 기본 구비 물품: 책상, 옷장, 침대, 신발장, 냉장고, 에어컨<br>\
    - 난방: 전기 온돌 난장<br>\
    - 공용 사용: 화장실, 샤워실 (층별 구분\)<br><br>","\
    7관<br>\
    - 2인 1실 (1층 침대 2개\)<br>\
    - 8관 역시 2인 1실이지만, 8관에 비해 큰편이다.<br>\
    - 경쟁률이 높음<br>\
    - 전체 구조: 지상 5층, 지하 1층<br>\
    - 기본 구비 물품: 책상, 옷장, 침대, 신발장, 냉장고, 에어컨<br>\
    - 공용 사용: 화장실, 샤워실( 층별 구분)");}

const gss_8 = document.querySelector(".gss8_pos")