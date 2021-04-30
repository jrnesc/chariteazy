import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Project = () => {

    // const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div class="text-center">1</div>,
        <div class="text-center">2</div>,
        <div class="text-center">3</div>,
        <div class="text-center">4</div>,
        <div class="text-center">5</div>,
    ];

    return (
        <div>
            <h1 class="text-center p-5">Specific Project</h1>

            <div class="grid gap-4 grid-cols-3 justify-items-center">
                <div><img class="w-30 h-40" src="images/hands.png" /></div>
                <div>
                    <h3>This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>
            </div>

            <div class="grid gap-4 grid-cols-2 justify-items-center">
                <div>
                    <h3>This is specific project specific project blah yeah blah blah blah blah blah</h3>
                </div>
                <div><img class="w-30 h-40" src="images/hands.png" /></div>
            </div>


            <h3 class="text-center p-5">Supporters</h3>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                class="justify-items-center"
            />
        </div>
    )
}

export default Project
