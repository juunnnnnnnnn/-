document.getElementById('guestbook-form').addEventListener('submit', function(e) {
    // Prevent the form from submitting the traditional way
    e.preventDefault();

    // Get the values from the inputs
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Create the entry text
    const entryText = `이름: ${name}, 메세지: ${phone}`;

    // Create a new div for this entry and append it
    const entryDiv = document.createElement('div');
    entryDiv.textContent = entryText;
    document.getElementById('entries').appendChild(entryDiv);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
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

