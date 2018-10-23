var React = require("react");
var _ = require('lodash');
var ImageGallery = require('react-image-gallery').default;

/** Art Related Images*/
const CuteDreamGirlWithSpecs = 'https://drive.google.com/uc?id=1_qPTB47HPjXrfeTSjsXI8B__ei71MLpr';
const BanTheFox7DeadlySins = 'https://drive.google.com/uc?id=1g6tzyCbH5cXWM-bjepJ8I9P5ozdnL2Z7';
const BatmanInDark = 'https://drive.google.com/uc?id=1PJ-reOCYsVaXytmhaUR_aZuk_-tAmLOY';
const BeautifulGirlVector = 'https://drive.google.com/uc?id=1dGgucY0-rjoFTKMExg-t82sBaDM5VP0G';
const BirdFromCameraBlurrEffect = 'https://drive.google.com/uc?id=1AX1DnMoQ25XtWJZsZYmFZRf5rlfmrFjE';
const DeadpoolHulk = 'https://drive.google.com/uc?id=1OL0ODpI9jwu-avXPWKFLDhTd-QLSmX2I';
const KakashiSenseiNaruto = 'https://drive.google.com/uc?id=1TdHg-AZsL0G9VlWj7JB3MZIFfYkr7V-_';
const HankokSketch = 'https://drive.google.com/uc?id=174y-rK6Sl-fEhF3ZhnM4Zdusfggaa7q1';
const BeachHouseKonkanPen = 'https://drive.google.com/uc?id=110uvRlO8w2gjHQtKDkNK4ozVY53QIlWl';
const BoatOceanReflection = 'https://drive.google.com/uc?id=1rryg320VSFwQP7g1X9T1XZ0m8h27YQcr';
const Ghost = 'https://drive.google.com/uc?id=19m0NrxALgnAVIGa_WhANaJEXa7O7wPEv';
const GreedyFishRedBluepen = 'https://drive.google.com/uc?id=1TF5pnfxn2S_I1R95gLgio98bjRu8JpyZ';
const PurushottamPrize = 'https://drive.google.com/uc?id=1ZU7PWhmlCu6L2QAExR77Bni9KWP79cXK';

/** Music Related Images*/
const AbhiMuzMeKahi_Thumb = 'https://drive.google.com/uc?id=1OGOQlOLahSwrq6GBYQNMHG7olIMoc2EM';
const AbhiMuzMeKahi_Tile = 'https://drive.google.com/uc?id=1gbxURzw_xfyiCjx7bEo1x2-OqSCGD4K9';
const KrishnaThemeMahabharata_Thumb = 'https://drive.google.com/uc?id=14akJLQKl_FRHSO9n1yBIos_qfu_T1Lm4';
const KrishnaThemeMahabharata_Tile = 'https://drive.google.com/uc?id=1lC0aSGalJmj_XQwCdqG_9tHDrlwhDY9b';
const MainRahuYaNaRahu_Thumb = 'https://drive.google.com/uc?id=1a6LFfgmtZp5Qwi963PvYytxzQwSgUVj9';
const MainRahuYaNaRahu_Tile = 'https://drive.google.com/uc?id=1eDGpKj1WeXuEQA7Zs8tL-mCHpM48xQAG';
const Titanic_Thumb = 'https://drive.google.com/uc?id=1H4Xj46YLlwE9BndGFqurqFbsMnSqtKtf';
const Titanic_Tile = 'https://drive.google.com/uc?id=18-v3QDR2g8R3kGyOfoNxIcLpCUjgBXK4';
const Malgudi_Thumb = 'https://drive.google.com/uc?id=1x9GxAWXIHNXovYfQi55WBG6xKx5nJcvk';
const Malgudi_Tile = 'https://drive.google.com/uc?id=1oEDh_iK86sI5wqTL2MPcJNiIpUT-BTrX';

var ImageGalleryView = React.createClass({
    propTypes: {},


    getInitialState: function () {
        return {
            showIndex: false,
            slideOnThumbnailHover: false,
            showBullets: true,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            showNav: true,
            slideDuration: 450,
            slideInterval: 2000,
            thumbnailPosition: 'bottom',
            showVideo: {},
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    },

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    },

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    },

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    },

    _onPause(index) {
        console.debug('paused on index', index);
    },

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    },

    _onPlay(index) {
        console.debug('playing from index', index);
    },

    _handleInputChange(state, event) {
        this.setState({[state]: event.target.value});
    },

    _handleCheckboxChange(state, event) {
        this.setState({[state]: event.target.checked});
    },

    _handleThumbnailPositionChange(event) {
        this.setState({thumbnailPosition: event.target.value});
    },

    _getStaticImages() {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail: `${PREFIX_URL}${i}t.jpg`
            });
        }

        return images;
    },

    _resetVideo() {
        this.setState({showVideo: {}});

        if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: true});
        }

        if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: true});
        }
    },

    _toggleShowVideo(url) {
        this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
            showVideo: this.state.showVideo
        });

        if (this.state.showVideo[url]) {
            if (this.state.showPlayButton) {
                this.setState({showGalleryPlayButton: false});
            }

            if (this.state.showFullscreenButton) {
                this.setState({showGalleryFullscreenButton: false});
            }
        }
    },

    _renderVideo(item) {
        return (
            <div className='image-gallery-image'>
                {
                    this.state.showVideo[item.embedUrl] ?
                        <div className='video-wrapper'>
                            <a
                                className='close-video'
                                onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                            >
                            </a>
                            <iframe
                                width='560'
                                height='315'
                                src={item.embedUrl}
                                frameBorder='0'
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        :
                        <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                            <div className='play-button'></div>
                            <img src={item.original}/>
                            {
                                item.description &&
                                <span
                                    className='image-gallery-description'
                                    style={{right: '0', left: 'initial'}}
                                >
                    {item.description}
                  </span>
                            }
                        </a>
                }
            </div>
        );
    },

    getItemListForArt: function () {
        return ([
            {
                thumbnail: PurushottamPrize,
                original: PurushottamPrize,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: '"Vakilya" - Acting Prize.'
            },
            {
                original: BirdFromCameraBlurrEffect,
                thumbnail: BirdFromCameraBlurrEffect,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Looking at a bird from a camera lens.'
            },
            {
                original: KakashiSenseiNaruto,
                thumbnail: KakashiSenseiNaruto,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Copy Ninja with Sharingan - Kakashi Sensei(Naruto Anime)'
            },
            {
                original: BatmanInDark,
                thumbnail: BatmanInDark,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Dark Knight'
            },
            {
                original: CuteDreamGirlWithSpecs,
                thumbnail: CuteDreamGirlWithSpecs,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Dream girl...'
            },
            {
                original: DeadpoolHulk,
                thumbnail: DeadpoolHulk,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Deadpool annoying Hulk.'
            },
            {
                original: BeautifulGirlVector,
                thumbnail: BeautifulGirlVector,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'A small try on vector images.'
            },
            {
                thumbnail: BanTheFox7DeadlySins,
                original: BanTheFox7DeadlySins,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Ban the fox sin from Seven Deadly Sins(Anime)'
            },
            {
                thumbnail: Ghost,
                original: Ghost,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Ghost'
            },
            {
                thumbnail: BeachHouseKonkanPen,
                original: BeachHouseKonkanPen,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: "A beach scene."
            },
            {
                thumbnail: BoatOceanReflection,
                original: BoatOceanReflection,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: "Lonely Boat in the middle of the ocean and it's reflection."
            },
            {
                thumbnail: GreedyFishRedBluepen,
                original: GreedyFishRedBluepen,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Life is a unnecessary race.'
            },
            {
                thumbnail: HankokSketch,
                original: HankokSketch,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Hankok !!!'
            }
        ]);
    },

    getItemListForMusic: function () {
        return ([
            {
                thumbnail: KrishnaThemeMahabharata_Thumb,
                original: KrishnaThemeMahabharata_Tile,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Krishna Theme (Mahabharata)',
                embedUrl: 'https://www.youtube.com/embed/hyvjIMcroX0',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: AbhiMuzMeKahi_Thumb,
                original: AbhiMuzMeKahi_Tile,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Abhi Muz Me Kahin (Agneepath)-Flute Cover',
                embedUrl: 'https://www.youtube.com/embed/rk9zN_Bw1hQ',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: MainRahuYaNaRahu_Thumb,
                original: MainRahuYaNaRahu_Tile,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Mashup - Main Rahoon Ya (Title Song) | Sawaar Loon(Lootera)',
                embedUrl: 'https://www.youtube.com/embed/TjBpGolobIg',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: Titanic_Thumb,
                original: Titanic_Tile,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Titanic Flute Cover',
                embedUrl: 'https://www.youtube.com/embed/oovLNLtk20Q',
                renderItem: this._renderVideo.bind(this)
            },
            {
                thumbnail: Malgudi_Thumb,
                original: Malgudi_Tile,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Malgudi Days Theme Flute Cover',
                embedUrl: 'https://www.youtube.com/embed/R_u1we4IWTY',
                renderItem: this._renderVideo.bind(this)
            }
        ]);
    },

    render: function () {
        var bIsArtContext = this.props.context === "art";
        var aImages = bIsArtContext ? this.getItemListForArt() : this.getItemListForMusic();

        var bShowFullScreenButton = this.state.showFullscreenButton && this.state.showGalleryFullscreenButton && bIsArtContext;
        var bShowPlayButton = this.state.showPlayButton && this.state.showGalleryPlayButton && bIsArtContext;
        return (
            <div className="imageGalleryViewContainer">
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    items={aImages}
                    lazyLoad={false}
                    onClick={this._onImageClick.bind(this)}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                    onPause={this._onPause.bind(this)}
                    onScreenChange={this._onScreenChange.bind(this)}
                    onPlay={this._onPlay.bind(this)}
                    infinite={this.state.infinite}
                    showBullets={this.state.showBullets}
                    showFullscreenButton={bShowFullScreenButton}
                    showPlayButton={bShowPlayButton}
                    showThumbnails={this.state.showThumbnails}
                    showIndex={this.state.showIndex}
                    showNav={this.state.showNav}
                    thumbnailPosition={this.state.thumbnailPosition}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    slideOnThumbnailHover={this.state.slideOnThumbnailHover}
                />
            </div>
        );
    }
});

module.exports = {
    view: ImageGalleryView,
};