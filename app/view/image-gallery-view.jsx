var React = require("react");
var _ = require('lodash');
var ImageGallery = require('react-image-gallery').default;

var test1image = require('../scss/images/Facebook-26-Black.png');
var CuteDreamGirlWithSpecs = require('../media/CuteDreamGirlWithSpecs.jpg');
var BanTheFox7DeadlySins = require('../media/BanTheFox7DeadlySins.jpg');
var BanTheFox7DeadlySins2 = require('../media/BanTheFox7DeadlySins2.png');
var BatmanInDark = require('../media/BatmanInDark.jpg');
var BeautifulGirlVector = require('../media/BeautifulGirlVector.jpg');
var BirdFromCameraBlurrEffect = require('../media/BirdFromCameraBlurrEffect.jpg');
var DeadpoolHulk = require('../media/DeadpoolHulk.jpg');
var KakashiSenseiNaruto = require('../media/KakashiSenseiNaruto.jpg');
var Test2Image = require('../media/preview.jpg');

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';


var ImageGalleryView = React.createClass({
    propTypes: {},


    getInitialState: function () {
        return {
            showIndex: false,
            slideOnThumbnailHover: false,
            showBullets: true,
            infinite: true,
            showThumbnails: true,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
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
                original: test1image,
                thumbnail: test1image,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Imagine like looking at a bird from a camera lens.'
            },
            {
                original: BirdFromCameraBlurrEffect,
                thumbnail: BirdFromCameraBlurrEffect,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Imagine like looking at a bird from a camera lens.'
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
                description: 'Imagined this girl in college...'
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
                thumbnail: Test2Image,
                original: Test2Image,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                embedUrl: 'https://www.youtube.com/watch?v=Rl3ELiPXFRo',
                description: 'Ban the fox sin from Seven Deadly Sins(Anime)',
                renderItem: this._renderVideo.bind(this)
            },
            /*{
             thumbnail: `${PREFIX_URL}4v.jpg`,
             original: `${PREFIX_URL}4v.jpg`,
             embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
             renderItem: this._renderVideo.bind(this)
             }*/
        ]);
    },

    render: function () {
        var aImages = this.getItemListForArt();

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
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
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