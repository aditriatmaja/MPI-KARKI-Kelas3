window.globalProvideData('slide', '{"title":"Klik tombol berwarna hijau dan dengarkan suaranya.\\nSuara hewan apakah yang kamu dengar?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":5,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide5","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"64gIACGar7t","actionGroups":{"ReviewInt_6PI4X5DdLae":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WWOtwfE19r"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6lnxkzcySIg.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PI4X5DdLae_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PI4X5DdLae_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PI4X5DdLae","typea":"var","valueb":"61Y2TmrLN4n","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.61Y2TmrLN4n.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6PI4X5DdLae"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.61Y2TmrLN4n.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6PI4X5DdLae"}]}]}]},"ReviewIntCorrectIncorrect_6PI4X5DdLae":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PI4X5DdLae_ReviewShape"}}]},"AnsweredInt_6PI4X5DdLae":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6PI4X5DdLae"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6PI4X5DdLae":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WWOtwfE19r"},"enabled":{"type":"boolean","value":false}}]},"6PI4X5DdLae_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6lnxkzcySIg.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.61Y2TmrLN4n.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6PI4X5DdLae"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6lnxkzcySIg.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6lnxkzcySIg.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6PI4X5DdLae"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_64gIACGar7t":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5Ytf94ynRF7"}}]},"NavigationRestrictionPreviousSlide_64gIACGar7t":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ikrWjhOfQ6","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ikrWjhOfQ6","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6PI4X5DdLae","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6PI4X5DdLae"}],"elseActions":[{"kind":"exe_actiongroup","id":"6PI4X5DdLae_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6PI4X5DdLae","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PI4X5DdLae","typea":"var","valueb":"61Y2TmrLN4n","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.61Y2TmrLN4n"},"completed_slide_ref":{"type":"string","value":"_player.628ugUy7RgU.6ijWozGfPLj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6PI4X5DdLae","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6PI4X5DdLae","typea":"var","valueb":"61Y2TmrLN4n","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.61Y2TmrLN4n"},"completed_slide_ref":{"type":"string","value":"_player.628ugUy7RgU.6ijWozGfPLj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_64gIACGar7t"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_64gIACGar7t"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":144,"id":"6RvGNqWaigN"},{"kind":"audio","assetId":145,"id":"6gITxFQdfqq"},{"kind":"audio","assetId":146,"id":"6Sy6bL9543W"},{"kind":"audio","assetId":147,"id":"5XNuehpp48N"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":26109,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5yoV4ponGp1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Pu68WXGKDb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6iPomjxKDiM"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6PI4X5DdLae_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WWOtwfE19r"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6EvgosbLB29"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Qb5XmNRfoF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bCdmmfxVGw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5eNEFOUd5u4"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5XNuehpp48N"}},{"kind":"media_play","objRef":{"type":"string","value":"5XNuehpp48N"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5XNuehpp48N"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":116,"id":"01","url":"story_content/5fr6dolk46O_80_DX2560_DY2560.swf","type":"normal","altText":"1280x720piksel (2).png","width":1280,"height":720,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"1280x720piksel (2).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"5yoV4ponGp1"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":138,"id":"01","url":"story_content/6ZDHiifS5TI_80_P_0_72_1080_876_DX888_DY888.swf","type":"normal","altText":"Desain tanpa judul (1).png","width":1080,"height":876,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":208,"yPos":96,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":222,"rotateYPos":180,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":444,"bottom":360,"altText":"Desain tanpa judul (1).png","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":0,"yPos":0,"width":444,"height":360,"strokewidth":0}},"width":444,"height":360,"resume":true,"useHandCursor":true,"id":"6Pu68WXGKDb"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6iPomjxKDiM_-1435947739","id":"01","linkId":"txt__default_6iPomjxKDiM","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":33,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":78}}}],"shapemaskId":"","xPos":184,"yPos":104,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":46,"altText":"4.","pngfb":false,"pr":{"l":"Lib","i":54}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":46,"strokewidth":0}},"width":48,"height":46,"resume":true,"useHandCursor":true,"id":"6iPomjxKDiM"},{"kind":"textinput","bindto":"_player.TextEntry5","align":"center","verticalAlign":"center","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"ketik jawabanmu di sini","fontsize":25,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":672,"yPos":272,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":215.5,"rotateYPos":67.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6WWOtwfE19r","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":412,"height":136,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":338,"bottom":80,"pngfb":false,"pr":{"l":"Lib","i":73}}},"html5data":{"xPos":0,"yPos":0,"width":432,"height":136,"strokewidth":1}},"width":432,"height":136,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":433,"bottom":137,"altText":"ketik jawabanmu di sini","pngfb":false,"pr":{"l":"Lib","i":72}}},"id":"6WWOtwfE19r","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry5","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6lnxkzcySIg"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6EvgosbLB29_388285507","id":"01","linkId":"txt__default_6EvgosbLB29","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":420,"bottom":151,"pngfb":false,"pr":{"l":"Lib","i":75}}}],"shapemaskId":"","xPos":656,"yPos":104,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":77.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":432,"bottom":155,"altText":"Klik tombol berwarna hijau dan dengarkan suaranya.\\nSuara hewan apakah yang kamu dengar?","pngfb":false,"pr":{"l":"Lib","i":79}},"html5data":{"xPos":0,"yPos":0,"width":432,"height":155,"strokewidth":0}},"width":432,"height":155,"resume":true,"useHandCursor":true,"id":"6EvgosbLB29"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":139,"id":"01","url":"story_content/5uxc37m4irm_80_DX256_DY256.swf","type":"normal","altText":"hijau4.png","width":256,"height":256,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":368,"yPos":296,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":64,"rotateYPos":64,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":128,"bottom":128,"altText":"hijau4.png","pngfb":false,"pr":{"l":"Lib","i":70}},"html5data":{"xPos":0,"yPos":0,"width":128,"height":128,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":128,"bottom":128,"altText":"hijau4.png","pngfb":false,"pr":{"l":"Lib","i":70}},"html5data":{"xPos":0,"yPos":0,"width":128,"height":128,"strokewidth":0}}}],"width":128,"height":128,"resume":true,"useHandCursor":true,"id":"6Qb5XmNRfoF","variables":[{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_visited","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6RvGNqWaigN"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6RvGNqWaigN"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6RvGNqWaigN"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6RvGNqWaigN"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6RvGNqWaigN"}}]}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpSetVisitedState"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":44,"id":"01","url":"story_content/6bLfGhdgb5O_80_DX210_DY210.swf","type":"normal","altText":"3.png","width":210,"height":210,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":45,"id":"02","url":"story_content/6bLfGhdgb5O_80_RE2FFA5_DX210_DY210.swf","type":"normal","altText":"3.png","width":210,"height":210,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1040,"yPos":600,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":52.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":9}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}}],"width":105,"height":105,"resume":true,"useHandCursor":true,"id":"6bCdmmfxVGw","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_down","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6gITxFQdfqq"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6gITxFQdfqq"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6gITxFQdfqq"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6gITxFQdfqq"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6gITxFQdfqq"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.628ugUy7RgU.6Dkm8x3ZDRm"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":20,"id":"01","url":"story_content/5rXZdCbl2Sk_80_DX210_DY210.swf","type":"normal","altText":"2.png","width":210,"height":210,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":21,"id":"02","url":"story_content/5rXZdCbl2Sk_80_RE2FFA5_DX210_DY210.swf","type":"normal","altText":"2.png","width":210,"height":210,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1152,"yPos":600,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":52.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":9}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":105,"bottom":105,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":-8,"right":105,"bottom":97,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":-8,"width":105,"height":105,"strokewidth":0}}}],"width":105,"height":105,"resume":true,"useHandCursor":true,"id":"5eNEFOUd5u4","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_down","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6Sy6bL9543W"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6Sy6bL9543W"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6Sy6bL9543W"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6Sy6bL9543W"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6Sy6bL9543W"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.628ugUy7RgU.5Ytf94ynRF7"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6PI4X5DdLae_CorrectReview","id":"01","linkId":"6PI4X5DdLae_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":59}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":58}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6PI4X5DdLae_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6PI4X5DdLae_IncorrectReview","id":"01","linkId":"6PI4X5DdLae_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":57}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":56}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6PI4X5DdLae_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6PI4X5DdLae_ReviewShape","id":"01","linkId":"txt_6PI4X5DdLae_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":906,"bottom":510,"pngfb":false,"pr":{"l":"Lib","i":81}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":8,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1260,"bottom":514,"altText":"","pngfb":false,"pr":{"l":"Lib","i":80}},"html5data":{"xPos":1,"yPos":1,"width":1258,"height":512,"strokewidth":1}},"width":1152,"height":565,"resume":false,"useHandCursor":true,"id":"6PI4X5DdLae_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');