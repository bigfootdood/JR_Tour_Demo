(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"gap":10,"watermark":false,"hash": "73062bdccdcc382a2bb0e031c9da050685cee457ccab72b52ff3f5a686f12da0", "definitions": [{"toolTipPaddingBottom":4,"height":"100%","subtitlesBottom":50,"subtitlesGap":0,"toolTipPaddingTop":4,"surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"minWidth":100,"progressBorderColor":"#000000","data":{"name":"Main Viewer"},"propagateClick":false,"vrThumbstickRotationStep":20,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"playbackBarLeft":0,"toolTipShadowColor":"#333138","playbackBarBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","progressBottom":10,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesFontFamily":"Arial","progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","id":"MainViewer","subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"toolTipPaddingLeft":6,"progressRight":"33%","playbackBarBottom":5,"toolTipBorderColor":"#767676","playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","progressOpacity":0.7,"progressBarBorderRadius":2,"playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"toolTipPaddingRight":6,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"class":"ViewerArea","playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","playbackBarRight":0,"subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"progressBorderRadius":2,"width":"100%","playbackBarProgressBorderRadius":0,"playbackBarBackgroundOpacity":1,"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","subtitlesTextShadowColor":"#000000"},{"backgroundPanoramaURL":"media/model_382F7C73_355A_9FAD_41B0_FE8F79AF9709/bg_3802A24B_3559_ABFD_41B1_40B13132C289.jpg","objects":[],"label":trans('model_382F7C73_355A_9FAD_41B0_FE8F79AF9709.label'),"model":"this.res_3ED40EDB_355A_989D_41B2_05B165370B4A","camera":"this.cam_3ED05EDC_355A_989B_41BB_19F5A7FDDC1A","receiveShadow":true,"surfaceSelectionCoef":2,"environmentIntensity":0.5,"thumbnailUrl":"media/model_382F7C73_355A_9FAD_41B0_FE8F79AF9709_t.jpg","class":"Model3D","floorRadius":85.32,"data":{"showOnlyHotspotsLineSight":true,"label":"JR","showOnlyHotspotsLineSightInPanoramas":true},"surfaceReticleMaxRadius":50,"id":"model_382F7C73_355A_9FAD_41B0_FE8F79AF9709","backgroundColor":"#333333","animations":["this.anim_3E269E96_355A_9897_41AD_EA6D5BD319B8"],"surfaceReticleRadius":0.02,"lights":["this.light_3ECCFEDD_355A_9895_41C5_F47BE97C0744"],"surfaceReticleMinRadius":15},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"items":["this.Model3DPlayListItem_2773C5DA_35DE_E89F_41AB_27F76A787408"],"id":"mainPlayList","class":"PlayList"},{"paddingBottom":0,"pressedBackgroundColorRatios":[0],"rollOverBackgroundColorRatios":[0],"horizontalAlign":"center","tabIndex":0,"minHeight":1,"minWidth":1,"id":"Button_3ABBD477_355E_EF95_41C7_FFFD73CFEB6C","pressedBackgroundOpacity":1,"left":"41.23%","propagateClick":false,"fontFamily":"Montserrat","backgroundColor":["#000000"],"fontSize":12,"rollOverBackgroundOpacity":0.8,"verticalAlign":"middle","paddingLeft":0,"fontWeight":"bold","data":{"name":"Button house info"},"rollOverBackgroundColor":["#BBD149"],"backgroundColorRatios":[0],"paddingRight":0,"backgroundOpacity":0,"bottom":"4.44%","fontColor":"#FFFFFF","pressedBackgroundColor":["#BBD149"],"class":"Button","width":110,"iconWidth":0,"height":40,"borderColor":"#000000","click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_2773C5DA_35DE_E89F_41AB_27F76A787408, {\"y\":0.615,\"pitch\":1,\"x\":9.92585,\"z\":-0.15544,\"yaw\":86.73}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","layout":"horizontal","iconHeight":0,"label":trans('Button_3ABBD477_355E_EF95_41C7_FFFD73CFEB6C.label'),"paddingTop":0,"rollOverShadow":false},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_382F7C73_355A_9FAD_41B0_FE8F79AF9709/scene.glb"},{"url":"media/model_382F7C73_355A_9FAD_41B0_FE8F79AF9709/scene_mobile.glb","tags":"mobile","class":"Model3DResourceLevel"}],"id":"res_3ED40EDB_355A_989D_41B2_05B165370B4A","class":"Model3DResource"},{"maxX":22.35,"initialY":0.61,"initialPitch":1,"initialX":9.93,"maxY":21.63,"initialZ":-0.15,"minY":-4.45,"minZ":-2.87,"minX":-20.39,"id":"cam_3ED05EDC_355A_989B_41BB_19F5A7FDDC1A","class":"FirstPersonModel3DCamera","autoNearFar":true,"vrEnabled":true,"maxZ":3.02,"initialYaw":86.73},{"class":"Model3DAnimation","name":"forward-port-thruster2.003Action","id":"anim_3E269E96_355A_9897_41AD_EA6D5BD319B8"},{"intensity":0.92,"id":"light_3ECCFEDD_355A_9895_41C5_F47BE97C0744","class":"AmbientLight"},{"media":"this.model_382F7C73_355A_9FAD_41B0_FE8F79AF9709","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer","id":"Model3DPlayListItem_2773C5DA_35DE_E89F_41AB_27F76A787408","class":"Model3DPlayListItem"}],"minHeight":0,"minWidth":0,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1},"name":"Player566","locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{}},"propagateClick":false,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"class":"Player","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","scripts":{"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"clone":TDV.Tour.Script.clone,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowScore":TDV.Tour.Script.quizShowScore,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initQuiz":TDV.Tour.Script.initQuiz,"quizStart":TDV.Tour.Script.quizStart,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"shareSocial":TDV.Tour.Script.shareSocial,"mixObject":TDV.Tour.Script.mixObject,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"textToSpeech":TDV.Tour.Script.textToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setValue":TDV.Tour.Script.setValue,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"init":TDV.Tour.Script.init,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"registerKey":TDV.Tour.Script.registerKey,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMainViewer":TDV.Tour.Script.getMainViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getKey":TDV.Tour.Script.getKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"toggleVR":TDV.Tour.Script.toggleVR,"enableVR":TDV.Tour.Script.enableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"disableVR":TDV.Tour.Script.disableVR,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playAudioList":TDV.Tour.Script.playAudioList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setLocale":TDV.Tour.Script.setLocale,"translate":TDV.Tour.Script.translate,"downloadFile":TDV.Tour.Script.downloadFile,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay},"scrollBarColor":"#000000","width":"100%","height":"100%","children":["this.MainViewer","this.Button_3ABBD477_355E_EF95_41C7_FFFD73CFEB6C"],"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.1.js.map
})();
//Generated with v2024.0.1, Thu Jun 20 2024