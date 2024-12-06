import './sidebar.css'

function Sidebar () {
       
    const data = [
        {id: 1, title: 'Home', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true'},
        {id: 2, title: 'Explores', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true'},
        {id: 3, title: 'Shorts', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true'},
        {id: 4, title: 'Subscription', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true'}

    ];

    const data2 = [
        {id: 1, title: 'Library', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true'},
        {id: 2, title: 'Histoy', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true'},
        {id: 3, title: 'Your Videos', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true'},
        {id: 4, title: 'Watch Later', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true'},
        {id: 3, title: 'Liked Videos', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true'},
        {id: 3, title: 'Show More', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true'}
    ];

    const data3 =[
        {id: 1, title: 'Nadir on The Go', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true'},
        {id: 2, title: 'Coke Studio Bangla', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true'},
        {id: 3, title: 'MKDHD', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true'},
        {id: 4, title: 'Figma', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true'},
        {id: 3, title: 'ATC Android', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'},
        {id: 3, title: 'Alux.com', img_url: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true'}
    ];

    return (
        <>
        <div className="sidebar">
            <div className="logo">
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="Hambarger" />
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="Youtube Logo" />
            </div>


           <div className="list-part-1">
            {data.map((i) => (
                <div key={i.id} className="list-1">
                    <img src={i.img_url} alt="" />
                    <div>{i.title}</div>
                </div>
            ))}
           </div>


            {/* <div className="list-part-1">
                <div className='list-1'>
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="Home Icon" />
                    <div>Home</div>
                </div>
            </div> */}

            <hr />

            <div className="list-part-1">
               {data2.map((j) => (
                                <div key={j.id} className="list-1">
                                <img src={j.img_url} alt="" />
                                <div>{j.title}</div>
                            </div>
               ))}
            </div>

            <hr />

            <div className='subscription'>Subscription</div>

            <div className="list-part-1">
               {data3.map((k) => (
                                <div key={k.id} className="list-1">
                                <img src={k.img_url} alt="" />
                                <div>{k.title}</div>
                            </div>
               ))}
            </div>
        </div>
        
        </>
    )
       
}
export default Sidebar