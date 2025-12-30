var _sTrackingAlreadyPresent = (typeof window._svd !== 'undefined' && typeof window._svc !== 'undefined');
var _svc = window._svc || {};
var _svd = window._svd || {};
_svc.workspaceKey = _svc.workspaceKey || '83b651f6b3eca1ab4551d95760fe5deb';
_svc.surveysStaticUrl = _svc.surveysStaticUrl || 'https://surveys-static-prd.survicate-cdn.com';
_svc.respondentUrl = _svc.respondentUrl || 'https://respondent.survicate.com';
_svd.flags = _svd.flags || {
    "async_consumers": true,
    "disable_sensitive_data_persistence": false,
    "enforce_user_authentication": false
};
_svd.surveys = _svd.surveys || [{
    "id": "15f69b806ea2f428",
    "activated": true,
    "name": "NPS",
    "type": "WidgetSurvey",
    "points": [{
        "id": 2937015,
        "type": "SurveyNps",
        "answer_type": "nps",
        "content": "How likely are you to recommend us to family and friends?",
        "description": "",
        "settings": {
            "logic": [{
                "uid": 749222054508,
                "go_to": 2937016,
                "value": [0, 2, 3, 4, 5, 6],
                "operator": "or",
                "condition": "is",
                "order_number": 0
            }, {
                "uid": 259630461083,
                "go_to": -1,
                "value": [7, 8, 9, 10],
                "operator": "or",
                "condition": "is",
                "order_number": 1
            }],
            "mandatory": true,
            "add_comment": false,
            "point_image": null,
            "comment_label": "",
            "display_logic": [],
            "answers_layout": "default",
            "first_range_tag": "NPS-Detractor",
            "third_range_tag": "NPS-Promoter",
            "second_range_tag": "NPS-Passive",
            "text_on_the_left": "Not likely",
            "mandatory_comment": true,
            "text_on_the_right": "Very likely",
            "disclaimer_settings": null,
            "first_range_goto_id": null,
            "third_range_goto_id": null,
            "second_range_goto_id": null,
            "display_logic_operator": null
        },
        "max_path": 1
    }, {
        "id": 2937016,
        "type": "SurveyQuestion",
        "answer_type": "text",
        "content": "How can we improve your experience with us?",
        "description": "",
        "settings": {
            "logic": [],
            "user_tag": "",
            "mandatory": false,
            "screenshot": {
                "button_enabled": false
            },
            "point_image": null,
            "display_logic": [],
            "followup_questions": null,
            "disclaimer_settings": null,
            "next_survey_point_id": null,
            "display_logic_operator": null
        },
        "max_path": 0,
        "answers": [{
            "id": 7536649,
            "type": null,
            "user_tag": null,
            "next_survey_point_id": null
        }]
    }],
    "project_id": 57283,
    "show_subfooter": false,
    "links": [{
        "link": "https://deriv.com/careers",
        "visible": true,
        "link_type": "exact",
        "regexp_text_pattern": "^deriv\\.com/careers\\/?$"
    }],
    "audiences_ids": [169787],
    "theme_id": 698775,
    "global_tags": null,
    "global_close_tags": null,
    "integrations": [],
    "settings": {
        "events": [],
        "format": "widget",
        "launch": {
            "end_at": null,
            "start_at": null,
            "responses_limit": null,
            "responses_period_limit": null,
            "responses_period_time_frame": "day"
        },
        "overlay": null,
        "messages": {
            "tooltip": "Please answer our short survey",
            "submit_text": "Submit",
            "thankyou_text": "Thank you for taking part in our survey",
            "text_placeholder": "Type your answer here...",
            "answer_required_text": "Answer required",
            "dropdown_placeholder": "Type or select an option",
            "navigation_back_text": "Back",
            "screenshot_save_text": "Save",
            "drag_and_draw_tooltip_text": "Click and drag to draw",
            "screenshot_take_tooltip_text": "Take a screenshot",
            "screenshot_delete_tooltip_text": "Delete the screenshot"
        },
        "recurring": false,
        "close_icon": "bottom",
        "show_close": true,
        "display_all": false,
        "display_per": null,
        "appear_method": "immediately",
        "display_delay": 0,
        "has_responses": false,
        "place_to_show": "right",
        "show_minimize": true,
        "display_scroll": 0,
        "run_minimalized": false,
        "survey_language": "",
        "survey_throttle": null,
        "recurring_period": 86400,
        "show_progress_bar": true,
        "close_on_urlchange": false,
        "display_percentage": 100,
        "navigation_enabled": false,
        "display_not_engaged": false,
        "recurring_max_views": null,
        "recurring_stop_after": null,
        "is_platform_installed": false,
        "run_minimalized_mobile": true,
        "hide_footer": true,
        "languages": null
    }
}];
_svd.themes = _svd.themes || [{
    "id": 698775,
    "custom_css": "",
    "custom_css_enabled": false,
    "color_scheme": {
        "answer": "#43464f",
        "button": "#ff444f",
        "question": "#43464f",
        "background": "#ffffff",
        "progress_bar": "#ff444f"
    },
    "type": "MicroTheme",
    "settings": {
        "avatar_image": "",
        "company_logo": "https://res.cloudinary.com/survicate-cloud/image/upload/v1697110545/Header%20logos/sejqfmzzwvgw7nxo0h7u.svg",
        "personalization": true,
        "short_text_message": ""
    }
}];
_svd.permissions = _svd.permissions || {
    "targeting_javascript_api": true,
    "web_surveys_npm_package": true,
    "surveys_screenshots": false
};
_svd.audiences = _svd.audiences || [{
    "id": 169787,
    "filters": [],
    "filters_relation": "and",
    "visitor_type": "anonymous"
}];
_svd.integrations = _svd.integrations || [];
_svd.installing = _svd.installing || false;
_svd.targeting_events = _svd.targeting_events || [{
    "name": "feedback_button_tapped",
    "type": "mobile"
}];
_svd.targeting_events_enabled = _svd.targeting_events_enabled || true;
_svd.translations = _svd.translations || null;
(function() {
    if (_sTrackingAlreadyPresent) {
        return;
    };
    if (document && document.head) {
        var linkElement = document.createElement('link');
        linkElement.href = 'https\u003A\/\/surveys\u002Dstatic\u002Dprd.survicate\u002Dcdn.com/fonts/fonts.css';
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        document.head.appendChild(linkElement);
    };
    var isIE = window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.match(/Trident.*rv\:11\./);
    var isSafari = window.navigator.vendor && window.navigator.vendor.indexOf('Apple') > -1 && window.navigator.userAgent && window.navigator.userAgent.indexOf('CriOS') == -1 && window.navigator.userAgent.indexOf('FxiOS') == -1;
    var isOldSafari = false;
    if (isSafari && window.navigator.userAgent) {
        var match = window.navigator.userAgent.match(/Version.([0-9]+)\./);
        if (match && match.length === 2) {
            if (parseInt(match[1]) < 11) {
                isOldSafari = true;
            }
        }
    };
    var isOldEdge = window.navigator.userAgent.match(/Edge\/(15\.15|18\.18)/);
    var coreUrls = ['https://surveys-static-prd.survicate-cdn.com/widget_core-28.13.5.js'];
    var e = document.getElementsByTagName('script')[0];
    if (isIE || isOldSafari || isOldEdge) {
        var css = 'h1 { width: 75%; height: 50%; overflow: auto; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; text-align: center; font-family: sans-serif; }';
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        var message = 'Your browser does not meet our security standards. Please update your browser to answer this survey.';
        var body = document.querySelector('body');
        var splash = document.createElement('div');
        var survey = document.querySelector('.survicate-survey');
        if (!head || !survey) {
            return;
        };
        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        };
        splash.classList.add('splash-screen');
        splash.innerHTML = '<h1>' + message + '</h1>';
        if (!body) {
            return;
        };
        body.appendChild(splash);
        return;
    };
    for (var i = 0; i < coreUrls.length; i++) {
        var s = document.createElement('script');
        s.setAttribute('crossorigin', 'anonymous');
        s.src = coreUrls[i];
        s.async = true;
        e.parentNode.insertBefore(s, e);
    }
})();