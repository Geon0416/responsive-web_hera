    // 헤더 배경색 변경 서식
    window.onscroll = function() {
        changeHeaderColor();
    };

    function changeHeaderColor() {
        // 헤더 엘리먼트 가져오기
        var header = document.getElementById("header");

        // 현재 스크롤 위치 확인
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        // 원하는 스크롤 위치에 따라 글자색 변경
        if (scrollPosition >= 50) {
            // alert("ㅇ나ㅣ아니");
            // header.style.background = "#777 !important"; // 변경할 글자색
            header.classList.add('act');
        } else {
            header.classList.remove('act');
        }
    }

    //헤더 로고 이미지 변경 서식


    //토글 색깔 변견 서식