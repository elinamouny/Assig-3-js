let bookmarks = [];

    function addBookmark() {
        const siteName = document.getElementById('siteName').value;
        const bookmarkName = document.getElementById('bookmarkName').value;
        const siteURL = document.getElementById('siteURL').value;

        if (siteName && bookmarkName && siteURL) {
            const bookmark = {
                siteName,
                bookmarkName,
                siteURL
            };

            bookmarks.push(bookmark);
            displayBookmarks();
            clearForm();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function displayBookmarks() {
        const bookmarkList = document.getElementById('bookmarkList');
        bookmarkList.innerHTML = '';

        bookmarks.forEach((bookmark, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${bookmark.siteName}</td>
                <td>${bookmark.bookmarkName}</td>
                <td>${bookmark.siteURL}</td>
                <td><button onclick="deleteBookmark(${index})">Delete</button></td>
                
            `;
            bookmarkList.appendChild(row);
        });
    }

    function deleteBookmark(index) {
        bookmarks.splice(index, 1);
        displayBookmarks();
    }

    
    function clearForm() {
        document.getElementById('siteName').value = '';
        document.getElementById('bookmarkName').value = '';
        document.getElementById('siteURL').value = '';}

       