import './searchbar.css'

function Searchbar () {

    const Search1icon = [
        {id:1 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
        {id:2 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
        {id:3 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
         {id:4 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"}
    ];

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
     {id: 2, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'ATC Andriod TOTO Company', feature:'1.5M views - 2 days ago'},
     {id: 3, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Saptarshi Prakash', feature:'1.5M views - 2 days ago'},
     {id: 4, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', img_c:'', detail: 'My Mix', channelname: 'Lopamundra Mitra,Anupam Roy', feature:'1.5M views - 2 days ago'},
     {id: 5, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'AJ&Smar', feature:'1.5M views - 2 days ago'},
     {id: 6, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true', img_c:'', detail: 'Mix-Mombati | Mohon Sarif | Dhakaiya Dose | Mahib Ahsan ft Anika', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 7, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 8, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 9, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 10, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 11, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
     {id: 12, img_t: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true', img_c:'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true', detail: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', channelname: 'Coke Studio Bangla', feature:'1.5M views - 2 days ago'},
    ];

    return(
        <>
        <div className='part-2-1'>

        <div className='searchbar'>
            <div className='search1'>
        <input type="text" className="searchBox" placeholder='Search'/>
        <div className="searchicon">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
        </div>

        <div className="mic">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
        </div>
        </div>

        <div className="search2">
                    
                    {
                        Search1icon.map((i)=>
                            <div className="icon">
                        <img src={i.url} alt="" />
                    </div>
                        )
                    }
               
                 </div>



     

            
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