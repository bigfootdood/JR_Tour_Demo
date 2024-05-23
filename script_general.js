(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
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
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
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
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
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
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"start":"this.init()","propagateClick":false,"data":{"history":{},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player5795"},"watermark":false,"scrollBarMargin":2,"layout":"absolute","width":"100%","hash": "50c75f1bd74b9461e3cb10cd10d30769cc387065bc40af22d0d13e102982b6a0", "definitions": [{"id":"Button_B3E722C3_A6CB_9C77_41DE_50C3D79A4D37","layout":"horizontal","backgroundColor":["#000000"],"iconWidth":0,"rollOverShadow":false,"propagateClick":false,"pressedBackgroundColor":["#BBD149"],"backgroundOpacity":0,"click":"var anim = this.anim_B76722E7_A6D8_9C3F_41E3_F29DA6AB8417; anim.set('finalFrame', 'last'); anim.set('animationDirection', 'alternate'); anim.set('loop', false); anim.reverse(); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_B3CBD22B_A6C9_9C37_4196_17DF9D1E8364, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_B3E722C3_A6CB_9C77_41DE_50C3D79A4D37); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_B3A2ABAB_A6C9_AC37_41A5_B7964E9D8C47, 'showEffect', false)}.bind(this); visibleFunc(this.Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36)","pressedBackgroundOpacity":1,"verticalAlign":"middle","right":"27.62%","label":trans('Button_B3E722C3_A6CB_9C77_41DE_50C3D79A4D37.label'),"rollOverBackgroundOpacity":0.8,"rollOverBackgroundColor":["#BBD149"],"fontWeight":"bold","paddingLeft":0,"fontSize":12,"data":{"name":"Contract"},"paddingRight":0,"pressedBackgroundColorRatios":[0],"borderColor":"#000000","rollOverBackgroundColorRatios":[0],"iconHeight":0,"top":"25.55%","width":182,"height":68,"fontColor":"#FFFFFF","backgroundColorRatios":[0],"visible":false,"class":"Button","horizontalAlign":"center","fontFamily":"Montserrat","paddingTop":0,"minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"effect_B3A2ABAB_A6C9_AC37_41A5_B7964E9D8C47","duration":500,"class":"FadeInEffect"},{"id":"MainViewer","toolTipPaddingTop":4,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowColor":"#000000","propagateClick":false,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"subtitlesTop":0,"toolTipFontSize":"1.11vmin","progressHeight":2,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderRadius":2,"progressBorderSize":0,"playbackBarBottom":5,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","progressBarBorderRadius":2,"height":"100%","toolTipShadowColor":"#333138","subtitlesFontFamily":"Arial","playbackBarHeight":10,"toolTipFontFamily":"Arial","firstTransitionDuration":0,"progressRight":"33%","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"playbackBarBackgroundColorDirection":"vertical","progressOpacity":0.7,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarRight":0,"progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderRadius":0,"minHeight":50,"vrPointerColor":"#FFFFFF","minWidth":100,"toolTipBorderColor":"#767676","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","subtitlesBottom":50,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"toolTipPaddingRight":6,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionColor":"#FF6600","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"progressBackgroundColor":["#000000"],"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"toolTipPaddingLeft":6,"progressBottom":10,"vrThumbstickRotationStep":20},{"id":"Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36","layout":"horizontal","backgroundColor":["#000000"],"iconWidth":0,"rollOverShadow":false,"propagateClick":false,"pressedBackgroundColor":["#BBD149"],"backgroundOpacity":0,"click":"var anim = this.anim_B76722E7_A6D8_9C3F_41E3_F29DA6AB8417; anim.set('finalFrame', 'last'); anim.set('animationDirection', 'normal'); anim.set('loop', false); anim.play(); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_B3A16DF4_A6CB_E411_41AC_DAC2419FFB77, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_B2F38899_A6C9_6C12_41E2_B891305ECBE6, 'showEffect', false)}.bind(this); visibleFunc(this.Button_B3E722C3_A6CB_9C77_41DE_50C3D79A4D37)","pressedBackgroundOpacity":1,"verticalAlign":"middle","label":trans('Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36.label'),"rollOverBackgroundOpacity":0.8,"rollOverBackgroundColor":["#BBD149"],"fontWeight":"bold","paddingLeft":0,"fontSize":12,"data":{"name":"Expand"},"paddingRight":0,"pressedBackgroundColorRatios":[0],"borderColor":"#000000","rollOverBackgroundColorRatios":[0],"iconHeight":0,"top":"26.6%","width":182,"height":68,"fontColor":"#FFFFFF","backgroundColorRatios":[0],"visible":false,"class":"Button","horizontalAlign":"center","fontFamily":"Montserrat","paddingTop":0,"left":"29.08%","minHeight":1,"paddingBottom":0,"minWidth":1},{"id":"model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345","thumbnailUrl":"media/model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345_t.jpg","label":trans('model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345.label'),"backgroundColor":"#000000","floorRadius":85.32,"lights":["this.light_B76F7310_A6D8_9C11_41C0_54BC32549E14","this.light_B76E2310_A6D8_9C11_41E2_E4764A72F176","this.light_B0BB3873_A6C9_6C17_41E2_564B14C13E03"],"objects":[],"surfaceSelectionCoef":2,"surfaceReticleMaxRadius":50,"model":"this.res_B761230F_A6D8_9C0F_41E4_61465CE130E6","environmentIntensity":0.5,"surfaceReticleMinRadius":15,"class":"Model3D","data":{"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true,"label":"boat"},"surfaceReticleRadius":0.02,"animations":["this.anim_B76722E7_A6D8_9C3F_41E3_F29DA6AB8417"],"camera":"this.cam_B76F4310_A6D8_9C11_41D5_8E9431DA756C","castShadow":true},{"id":"effect_B2F38899_A6C9_6C12_41E2_B891305ECBE6","duration":500,"class":"FadeInEffect"},{"id":"effect_B3A16DF4_A6CB_E411_41AC_DAC2419FFB77","duration":500,"class":"FadeOutEffect"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345"}]},{"id":"MainViewerModel3DPlayer","class":"Model3DPlayer","viewerArea":"this.MainViewer"},{"id":"effect_B3CBD22B_A6C9_9C37_4196_17DF9D1E8364","duration":500,"class":"FadeOutEffect"},{"id":"effect_BFA12B1B_A6BB_EC17_41B4_89FC9A386588","duration":500,"class":"FadeInEffect"},{"id":"light_B76F7310_A6D8_9C11_41C0_54BC32549E14","class":"OrbitLight","intensity":0.5,"pitch":45,"yaw":-45,"shadowTolerance":2,"castShadow":true},{"id":"light_B76E2310_A6D8_9C11_41E2_E4764A72F176","class":"OrbitLight","intensity":0.3,"pitch":88,"yaw":96,"shadowTolerance":2,"castShadow":true},{"id":"light_B0BB3873_A6C9_6C17_41E2_564B14C13E03","class":"OrbitLight","pitch":81,"yaw":-3,"shadowTolerance":2,"castShadow":true},{"id":"res_B761230F_A6D8_9C0F_41E4_61465CE130E6","class":"Model3DResource","levels":[{"url":"media/model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345/scene.glb","class":"Model3DResourceLevel"},{"tags":"mobile","url":"media/model_B45AF0FA_A6D8_9C11_41D1_8D6EC4FB8345/scene_mobile.glb","class":"Model3DResourceLevel"}]},{"id":"anim_B76722E7_A6D8_9C3F_41E3_F29DA6AB8417","class":"Model3DAnimation","name":"Animation","index":0},{"id":"cam_B76F4310_A6D8_9C11_41D5_8E9431DA756C","initialPitch":0.17,"maxDistance":71.08,"initialYaw":-89.34,"initialX":0.21,"autoNearFar":true,"minZ":-19.76,"initialDistance":130.18,"class":"OrbitModel3DCamera","maxX":127.14,"minX":-128.81,"sequences":["this.seq_BE0F555E_A6C7_6411_41CE_A1F57CF401EC"],"maxY":65.32,"minDistance":22.82,"initialSequence":"this.seq_BE0F555E_A6C7_6411_41CE_A1F57CF401EC","initialZ":0.25,"maxZ":19.77,"minY":-51.61,"initialY":4.57},{"mandatory":true,"id":"seq_BE0F555E_A6C7_6411_41CE_A1F57CF401EC","class":"Model3DCameraSequence","movements":[{"targetYaw":-89.34,"duration":1000,"targetZ":0.25,"targetY":4.57,"targetPitch":0.17,"easing":"cubic_in_out","class":"TargetModel3DCameraMovement","data":{"name":"View 1"},"targetX":0.21,"targetDistance":130.18},{"targetYaw":-89.34,"duration":3000,"targetZ":0.25,"targetY":4.57,"targetPitch":0.17,"easing":"cubic_in_out","class":"TargetModel3DCameraMovement","data":{"name":"View 2"},"targetX":0.21,"targetDistance":41.2},{"targetYaw":-89.95,"duration":3000,"targetZ":0.25,"targetY":4.57,"targetPitch":-90,"easing":"cubic_in_out","class":"TargetModel3DCameraMovement","data":{"name":"View 3"},"targetX":0.21,"targetDistance":41.2},{"targetYaw":178.36,"duration":4000,"targetZ":0.25,"targetY":4.57,"targetPitch":2.03,"easing":"cubic_in_out","class":"TargetModel3DCameraMovement","data":{"name":"View 4"},"targetX":0.21,"targetDistance":41.2}],"repeatEnd":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_BFA12B1B_A6BB_EC17_41B4_89FC9A386588, 'showEffect', false)}.bind(this); visibleFunc(this.Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36)"}],"scripts":{"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"ENABLE_VR":TDV.Tour.Script.ENABLE_VR,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"textToSpeech":TDV.Tour.Script.textToSpeech,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getKey":TDV.Tour.Script.getKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByName":TDV.Tour.Script.getMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"createTween":TDV.Tour.Script.createTween,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"TOGGLE_VR":TDV.Tour.Script.TOGGLE_VR,"setLocale":TDV.Tour.Script.setLocale,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"DISABLE_VR":TDV.Tour.Script.DISABLE_VR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"clone":TDV.Tour.Script.clone,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initQuiz":TDV.Tour.Script.initQuiz,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeJS":TDV.Tour.Script.executeJS,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlays":TDV.Tour.Script.getOverlays,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"mixObject":TDV.Tour.Script.mixObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizFinish":TDV.Tour.Script.quizFinish,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers},"height":"100%","backgroundColorRatios":[0],"class":"Player","gap":10,"children":["this.MainViewer","this.Button_B5AA6849_A6C9_EC73_41E1_881C97DF7E36","this.Button_B3E722C3_A6CB_9C77_41DE_50C3D79A4D37"],"scrollBarColor":"#000000","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.14.js.map
})();
//Generated with v2023.2.14, Thu May 23 2024