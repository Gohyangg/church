 // 팝업을 닫고 로컬스토리지에 저장
 function closePopup() {
    if (document.getElementById("dontShowToday").checked) {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      localStorage.setItem("hidePopupUntil", tomorrow.getTime());
    }
    document.getElementById("popup").style.display = "none";
  }

  // 페이지 로드 시 팝업 보여줄지 판단
  window.onload = function () {
    const hideUntil = localStorage.getItem("hidePopupUntil");
    const now = new Date().getTime();
    if (!hideUntil || now > hideUntil) {
      document.getElementById("popup").style.display = "block";
    }
  };