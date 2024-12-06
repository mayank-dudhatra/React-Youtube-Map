import './searchbar.css'

function Searchbar () {

    const feed =[
        {id: 1, name: 'Cook Studio'},
        {id: 2, name: 'UX'},
        {id: 3, name: 'Case Study'},
        {id: 4, name: 'Music'},
        {id: 5, name: 'Bangla Lofi'},
        {id: 6, name: 'Tour'},
        {id: 7, name: 'Saintmartin'},
        {id: 8, name: 'Tech'},
        {id: 9, name: 'iphone 13'},
        {id: 10, name: 'User Interface Design'},
        {id: 11, name: 'Computer'}

    ];

    const video =[
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 1, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},

 
    ];

    return(
        <>
        <div className='part-2-1'>

        <div className='searchbar'>
            {/* <label htmlFor="Search"></label>
           <input type="text"  /> */}
        </div>
        <hr />

        <div className="word">
        <div className='word-1'>All</div>
        {feed.map((a) => (
            <div key={a.id} className="word-2">{a.name}</div>
            ))}
            <div className='rigtharrow'></div>
        </div>

        <hr className='horizontalline' />

        <div className="thubnail">
            {video.map((b) => (
                <div key={b.id}  className="thumbnail-1">
                  <img src={b.img_t} alt="" height={145} />
                  <div className="information">
                    <img src={b.img_c} alt="" />
                    <div className="video-detail">{b.detail}</div>
                  </div>
                  <div className="channel-name">{b.channelname}</div>
                  <div className="views">{b.feature}</div>
                </div>
            ))}
        </div>
         
         
         

        </div>

        </>
    )
}
export default Searchbar