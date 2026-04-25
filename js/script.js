function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



 <section id="videoCarousel" class="videoCarousel">
    
        <div class="carousel-header">

            <div class="text1">
                <h1>Записывайся в поход</h1>
            </div>
            
            <div class="carousel-buttons">
                <i id="scrollLeft" class="fa-solid fa-arrow-left"></i>
                <i id="scrollRight" class="fa-solid fa-arrow-right"></i>
            </div>

        </div>

        <ul class="videoCarousel-container">

            <li class="card" onclick="window.location.href='volgaMore.html'">
            <div class="img">
                <img src="/fotoForOne/first.jpg" alt="img" draggable="false">
            </div>
            <h2>Волга море</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum necessitatibus commodi similique quibusdam deleniti corrupti officia, non impedit rerum.</p>
            </li>

            <li class="card">
                <div class="img">
                    <img src="/video/two.jpg" alt="img" draggable="false">
                </div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum necessitatibus commodi similique quibusdam deleniti corrupti officia, non impedit rerum.</p>
            </li>

            <li class="card">
                <div class="img">
                    <img src="/video/three.jpg" alt="img" draggable="false">
                </div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum necessitatibus commodi similique quibusdam deleniti corrupti officia, non impedit rerum.</p>
            </li>

            <li class="card">
                <div class="img">
                    <img src="/video/fore.jpg" alt="img" draggable="false">
                </div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum necessitatibus commodi similique quibusdam deleniti corrupti officia, non impedit rerum.</p>
            </li>

            <li class="card">
                <div class="img">
                    <img src="/video/five.jpg" alt="img" draggable="false">
                </div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum necessitatibus commodi similique quibusdam deleniti corrupti officia, non impedit rerum.</p>
            </li>
        </ul>

        <div class="btn2-container">
            <div class="btn2">
                <i class="fa-solid fa-arrow-down"></i>
                <a href="/schedule.html">Расписание походов</a>
            </div>
        </div>
    </section>