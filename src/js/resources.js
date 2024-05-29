import { ImageSource, Loader } from 'excalibur';
import { TiledResource } from '@excaliburjs/plugin-tiled';

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    NewFish: new ImageSource('images/NewFish.png'),
    Background: new ImageSource('images/PathMap.png'),
    Tier0: new ImageSource('images/Tier0.png'),
    Tier1: new ImageSource('images/Tier1.png'),
    Tier2: new ImageSource('images/Tier2.png'),
    Tier3: new ImageSource('images/Tier3.png'),
    Tier4: new ImageSource('images/Tier4.png'),
    Tier5: new ImageSource('images/Tier5.png'),
    Castle: new ImageSource('images/castle.png'),
    StartButton: new ImageSource('images/StartButton.png'),
    Heart: new ImageSource('images/pixel-heart.png'),
    Money: new ImageSource('images/Money.png'),
    BackgroundBegin: new ImageSource('images/BackGroundGame.jpg'),

};

const ResourceLoader = new Loader()
    for(let res of Object.values(Resources)) {
        ResourceLoader.addResource(res)
    }

export { Resources, ResourceLoader };
