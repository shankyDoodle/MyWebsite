var React = require("react");
var _ = require('lodash');
var ImageGallery = require('react-image-gallery').default;

/** Art Related Images*/
const CuteDreamGirlWithSpecs = '../media/CuteDreamGirlWithSpecs.jpg';
const BanTheFox7DeadlySins = '../media/BanTheFox7DeadlySins.jpg';
const BatmanInDark = '../media/BatmanInDark.jpg';
const BeautifulGirlVector = '../media/BeautifulGirlVector.jpg';
const BirdFromCameraBlurrEffect = '../media/BirdFromCameraBlurrEffect.jpg';
const DeadpoolHulk = '../media/DeadpoolHulk.jpg';
const KakashiSenseiNaruto = '../media/KakashiSenseiNaruto.jpg';

/** Music Related Images*/
const AbhiMuzMeKahi_Thumb = '../media/AbhiMuzMeKahin_Thumb.png';
const AbhiMuzMeKahi_Tile = '../media/AbhiMuzMeKahin_Tile.jpg';
const KrishnaThemeMahabharata_Thumb = '../media/KrishnaThemeMahabharata_Thumb.png';
const KrishnaThemeMahabharata_Tile = '../media/KrishnaThemeMahabharata_Tile.jpg';
const MainRahuYaNaRahu_Thumb = '../media/MainRahuYaNaRahu_Thumb.png';
const MainRahuYaNaRahu_Tile = '../media/MainRahuYaNaRahu_Tile.jpg';
const Titanic_Thumb = '../media/Titanic_Thumb.png';
const Titanic_Tile = '../media/Titanic_Tile.jpg';

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