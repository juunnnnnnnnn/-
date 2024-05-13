function addMemo() {
    var input = document.getElementById('memoInput');
    var memo = input.value;
    if (memo) {
        var memoList = document.getElementById('memoList');
        var memoItem = document.createElement('div');
        memoItem.classList.add('memoItem');
        memoItem.textContent = memo;
        memoList.appendChild(memoItem);
        input.value = ''; // 입력 필드 초기화
    }
}
