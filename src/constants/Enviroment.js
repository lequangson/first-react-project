export const CHAT_SERVER_URL = process.env.CHAT_API_URL
export const NOTIFICATION_INFOR = 'NOTIFICATION_INFOR'
export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS'
export const NOTIFICATION_WARNING = 'NOTIFICATION_WARNING'
export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR'
export const NOTIFICATION_NOT_ENOUGH_LIKE = 'NOTIFICATION_NOT_ENOUGH_LIKE';
export const NOTIFICATION_ERROR_DEFAULT_TIME = 5000;

export const UPDATE_PREVIOUS_PAGE = 'UPDATE_PREVIOUS_PAGE'
export const UPDATE_SCROLL_POSSITION = 'UPDATE_SCROLL_POSSITION'
export const UPDATE_UPLOAD_PICTURE_PAGESOURCE = 'UPDATE_UPLOAD_PICTURE_PAGESOURCE'
export const UPDATE_LAST_UPDATE = 'UPDATE_LAST_UPDATE'
export const CHANGE_BANNER_STATUS = 'CHANGE_BANNER_STATUS'
export const UPDATE_REMIND_RANDOM_MATCH_STATUS = 'UPDATE_REMIND_RANDOM_MATCH_STATUS'
export const UPDATE_PUSH_NOTI_MODAL = 'UPDATE_PUSH_NOTI_MODAL'
export const UPDATE_ENVIRONMENT_STATE = 'UPDATE_ENVIRONMENT_STATE'

// ----------------- Page file ---------------------------------//
export const SEARCH_PAGE = 'SEARCH_PAGE'
export const PEOPLE_LIKED_ME_PAGE = 'PEOPLE_LIKED_ME_PAGE'
export const OTHER_PROFILE_PAGE = 'OTHER_PROFILE_PAGE'
export const MY_PROFILE_PAGE = 'MY_PROFILE_PAGE'
export const FAVORITE_PAGE = 'FAVORITE_PAGE'
export const FOOTPRINT_PAGE = 'FOOTPRINT_PAGE'
export const BLOCK_USER_BLOCKED_PAGE = 'BLOCK_USER_BLOCKED_PAGE'
export const BLOCK_USER_MUTED_PAGE = 'BLOCK_USER_MUTED_PAGE'
export const RECOMMENDATION_PAGE = 'RECOMMENDATION_PAGE'
export const PEOPLE_I_LIKED_PAGE = 'PEOPLE_I_LIKED_PAGE'
export const REMIND_BANNER = 'REMIND_BANNER'
export const MATCHED_PAGE = 'MATCHED_PAGE'
export const REMIND_UPDATE_INTRO = 'REMIND_UPDATE_INTRO'
export const WELCOME_PAGE = 'WELCOME_PAGE'
export const PHOTO_STREAM = 'PHOTO_STREAM'
export const PAYMENT_PAGE = 'PAYMENT_PAGE'
export const VOTED_MODAL_PAGE = 'VOTED_MODAL_PAGE'
export const SIMILAR_MODAL_PAGE = 'SIMILAR_MODAL_PAGE'
export const RANDOM_MATCH = 'RANDOM_MATCH'
export const BOOST_RANK = 'BOOST_RANK'

// ----------------- End page file ----------------------------//
export const SEND_NOTIFICATION = 'SEND_NOTIFICATION'
// ----------------- Action constant definition ---------------//

export const EMAIL_TYPE_WELCOME = 1
export const EMAIL_TYPE_LIKE_NOTIFICATION = 2
export const EMAIL_TYPE_MATCH_NOTIFICATION = 3
export const EMAIL_TYPE_CONTACT_US_TO_ADMIN = 4
export const EMAIL_TYPE_CONTACT_US_THANK_YOU = 5

export const ADD_ACTIVITY_AUDIT_REQUEST = 'ADD_ACTIVITY_AUDIT_REQUEST'
export const ADD_ACTIVITY_AUDIT_SUCCESS = 'ADD_ACTIVITY_AUDIT_SUCCESS'
export const ADD_ACTIVITY_AUDIT_FAILURE = 'ADD_ACTIVITY_AUDIT_FAILURE'
// ----------------- End Action constant definition -----------//
export const SAVE_IMAGE = 'SAVE_IMAGE'
export const SAVE_FILES_UPLOAD = 'SAVE_FILES_UPLOAD'
export const CLEAR_FILES_UPLOAD = 'CLEAR_FILES_UPLOAD'
export const SET_VIEW_PROFILE_SOURCE = 'SET_VIEW_PROFILE_SOURCE'
export const SET_PROFILE_NEXT_USER_INDEX = 'SET_PROFILE_NEXT_USER_INDEX'

export const API_EXECUTION_CODE_SUCCESS = "01"
export const GA_SEND = 'GA_SEND'
export const SEND_GOOGLE_ANALYTIC = 'SEND_GOOGLE_ANALYTIC'

export const GA_ACTION_LOGIN = 'ACTION_LOGIN'
export const GA_ACTION_REGISTRATION = 'ACTION_REGISTRATION'
export const GA_ACTION_SAVE_SEARCH_CONDITION = 'ACTION_SAVE_SEARCH_CONDITION'
export const GA_ACTION_SEARCH = 'ACTION_SEARCH'
export const GA_ACTION_LIKE = 'ACTION_LIKE'
export const GA_ACTION_OPEN_LIKE = 'GA_ACTION_OPEN_LIKE'
export const GA_ACTION_MATCH = 'ACTION_MATCH'
export const GA_ACTION_ADD_FAVORITE = 'ACTION_ADD_FAVORITE'
export const GA_ACTION_DELETE_FAVORITE = 'ACTION_DELETE_FAVORITE'
export const GA_ACTION_EDIT_PROFILE = 'GA_ACTION_EDIT_PROFILE'
export const GA_ACTION_UPLOAD_AVATAR_DEVICE = 'GA_ACTION_UPLOAD_AVATAR_DEVICE'
export const GA_ACTION_UPLOAD_AVATAR_FACEBOOK = 'GA_ACTION_UPLOAD_AVATAR_FACEBOOK'
export const GA_ACTION_UPLOAD_OTHER_PICTURES_DEVICE = 'GA_ACTION_UPLOAD_OTHER_PICTURES_DEVICE'
export const GA_ACTION_UPLOAD_OTHER_PICTURES_FACEBOOK = 'GA_ACTION_UPLOAD_OTHER_PICTURES_FACEBOOK'
export const GA_ACTION_EDIT_PROFILE_FIRST_TIMES = 'GA_ACTION_EDIT_PROFILE_FIRST_TIMES'
export const GA_ACTION_DELETE_OTHER_PICTURE = 'GA_ACTION_DELETE_OTHER_PICTURE'
export const GA_ACTION_BLOCK_USER = 'GA_ACTION_BLOCK_USER'
export const GA_ACTION_UNBLOCK_USER = 'GA_ACTION_UNBLOCK_USER'
export const GA_ACTION_MUTE_USER = 'GA_ACTION_MUTE_USER'
export const GA_ACTION_UNMUTE_USER = 'GA_ACTION_UNMUTE_USER'
export const GA_OPEN_LINK_IN_EMAIL = 'GA_OPEN_LINK_IN_EMAIL'
export const GA_ACTION_LIKE_WITH_MESSAGE = 'GA_ACTION_LIKE_WITH_MESSAGE'
export const GA_ACTION_OPEN_REMIND = 'GA_ACTION_OPEN_REMIND'
export const GA_ACTION_OPEN_TIPS = 'GA_ACTION_OPEN_TIPS'
export const GA_ACTION_OPEN_NEXTLINK_TIPS = 'GA_ACTION_OPEN_NEXTLINK_TIPS'
export const GA_ACTION_UPDATE_NICKNAME = 'GA_ACTION_UPDATE_NICKNAME'
export const GA_ACTION_VIEW_OTHER_PROFILE = 'GA_ACTION_VIEW_OTHER_PROFILE'
export const GA_ACTION_LOGIN_FAILURE = 'GA_ACTION_LOGIN_FAILURE'
export const GA_ACTION_COMPLETE_TUTORIAL = 'GA_ACTION_COMPLETE_TUTORIAL'
export const GA_ACTION_PHOTO_SERVICE = 'GA_ACTION_PHOTO_SERVICE'
export const GA_ACTION_WELCOME_PAGE_SKIP = 'GA_ACTION_WELCOME_PAGE_SKIP'
export const GA_ACTION_SAVE_ATTRACTIVE_USER = 'GA_ACTION_SAVE_ATTRACTIVE_USER'
export const GA_ACTION_VIEW_ADMIN_MESSAGE = 'GA_ACTION_VIEW_ADMIN_MESSAGE'
export const GA_ACTION_PAYMENT_LEARN_MORE = 'GA_ACTION_PAYMENT_LEARN_MORE'
export const GA_ACTION_PAYMENT_PACKAGE_SUBMIT = 'GA_ACTION_PAYMENT_PACKAGE_SUBMIT'
export const GA_ACTION_PAYMENT_PROCESS_PAYMENT = 'GA_ACTION_PAYMENT_PROCESS_PAYMENT'
export const GA_ACTION_VERIFY = 'GA_ACTION_VERIFY'
export const GA_ACTION_VOTE_PHOTO = 'GA_ACTION_VOTE_PHOTO'
export const GA_ACTION_UNVOTE_PHOTO = 'GA_ACTION_UNVOTE_PHOTO'
export const GA_ACTION_BOOST_RANK_CLICK = 'GA_ACTION_BOOST_RANK_CLICK'
export const GA_ACTION_RANDOM_MATCH_CLICK_BANNER = 'GA_ACTION_RANDOM_MATCH_CLICK_BANNER'
export const GA_ACTION_RANDOM_MATCH_OPEN_CARD = 'GA_ACTION_RANDOM_MATCH_OPEN_CARD'
export const GA_ACTION_BOOST_RANK_BUY = 'GA_ACTION_BOOST_RANK_BUY'
export const GA_ACTION_COIN_CLICK = 'GA_ACTION_COIN_CLICK'
export const GA_ACTION_COIN_BUY = 'GA_ACTION_COIN_BUY'
export const GA_ACTION_GET_MORE_COIN = 'GA_ACTION_GET_MORE_COIN'
export const GA_ACTION_PAYMENT_CALLBACK_PROCESS_FAILURE = 'GA_ACTION_PAYMENT_CALLBACK_PROCESS_FAILURE'
export const GA_ACTION_PAYMENT_CALLBACK_PROCESS_SUCCESS = 'GA_ACTION_PAYMENT_CALLBACK_PROCESS_SUCCESS'

export const API_GET = 'GET'
export const API_POST = 'POST'
export const API_DELETE = 'DELETE'

// --------------------------- Activity Code ----------------------------------//
export const ACTIVITY_VIEW_PROFILE = 6
export const ACTIVITY_VIEW_ADMIN_MESSAGE = 61
// --------------------------- Activity Code ----------------------------------//
export const DEFAULT_PICTURE = 'http://placehold.it/420x420'

// export const DELAY_TIME_TO_CHECK_NOTIFICATION = 5 * 60 * 1000
export const DELAY_TIME_TO_CHECK_NOTIFICATION = 30000; // every 30 seconds
export const DELAY_TIME_TO_UPDATE_LOCATION = 1800000; // 30 mins

// CDN Url
export const CDN_URL = 'https://odpublic-s3-amazonaws.cdn.vccloud.vn'

// Default avatar
export const DEFAULT_AVATAR_MALE = `${CDN_URL}/general/male_default_`
export const DEFAULT_AVATAR_FEMALE = `${CDN_URL}/general/female_default_`
export const DEFAULT_LOAD_MALE = `${CDN_URL}/general/default_load_male.png`
export const DEFAULT_LOAD_FEMALE = `${CDN_URL}/general/default_load_female.png`

// Promotion
export const PROMOTION_IMAGE = `${CDN_URL}/general/promotion.png`

// Update self-introduction
export const UPDATE_INTRO_IMAGE = `${CDN_URL}/general/update-introduction.png`
export const PAYMENT_MODAL_IMAGE = `${CDN_URL}/general/upgrade.png`

// Match Images
export const MATCH_IMAGE = `${CDN_URL}/general/match-bg.png`

// Banner Icons
export const BANNER_ICON_URL = `${CDN_URL}/general/`
export const VOTE_ICON = `${CDN_URL}/general/vote_icon.png`
export const ENVELOP_ICON = `${CDN_URL}/general/envelop.png`
export const LIKE_2_ICON = `${CDN_URL}/general/like%2B2.png`
export const LIKE_STYLE_ICON = `${CDN_URL}/general/tym%20icon.png`
export const LIKE_STYLE_ICON_PINK = `${CDN_URL}/general/tym-icon-pink.png`
export const LIKE_STYLE_ICON_GREY = `${CDN_URL}/general/tym-icon-grey.png`

export const MAP_NEARBY_ACTIVE = `${CDN_URL}/general/map_nearby_active.png`
export const SMILE_FACE = `${CDN_URL}/general/smile_face.png`
export const BOOST_RANK_BANNER = `${CDN_URL}/general/boost_banner.png`
export const RANDOM_MATCH_BANNER = `${CDN_URL}/general/random_match_banner.png`
export const RANDOM_MATCH_MODAL = `${CDN_URL}/general/random_match_modal.png`
export const RANDOM_SIGN = `${CDN_URL}/general/random-sign.png`
export const BOOST_RANK_MODAL = `${CDN_URL}/general/Payment/24h_on_top_popup.png`
export const BOOST_RANK_SUCCESS = `${CDN_URL}/general/boost_success.png`
export const BROKEN_HEART = `${CDN_URL}/general/broken-heart.png`
export const HAPPY_HEART = `${CDN_URL}/general/Happy-heart.png`
export const PUSH_NOTI_MODAL_HEADER = `${CDN_URL}/general/Header.png`
export const VOTE_PHOTO_BANNER = `${CDN_URL}/general/icon+vote+photo+.png`
export const UNLOCK_WHO_LIKE_ME_MODAL = `${CDN_URL}/general/unlock_who_like_me_modal.png`

// Landingpage
export const LANDINGPAGE_BASE_URL = `${CDN_URL}/general/LandingPage/`

// Modal
export const MODAL_SHOW_NEXT = 'MODAL_SHOW_NEXT'
export const UPDATE_SEARCH_ELEMENT_HEIGHT = 'UPDATE_SEARCH_ELEMENT_HEIGHT'
export const RECORD_NOT_FOUND = 'ActiveRecord::RecordNotFound'
export const USER_NOT_FOUND = "Couldn't find User"
export const LOADING_DATA_TEXT = 'Đang tải dữ liệu...'
export const REPORT_BAD_USER_REASON_MIN_LENGTH = 20
export const REPORT_BAD_USER_REASON_MAX_LENGTH = 1024

export const REPORT_BAD_USER_REQUEST = 'REPORT_BAD_USER_REQUEST'
export const REPORT_BAD_USER_SUCCESS = 'REPORT_BAD_USER_SUCCESS'
export const REPORT_BAD_USER_FAILURE = 'REPORT_BAD_USER_FAILURE'
export const MODAL_RECOMMENDATION = 'MODAL_RECOMMENDATION'
export const MODAL_PROMOTION = 'MODAL_PROMOTION'
export const MODAL_REMIND_RANDOM_MATCH = 'MODAL_REMIND_RANDOM_MATCH'

// Images & Icons
export const ICON_404 = `${CDN_URL}/general/heartbreak.png`
export const FACEBOOK_SYNC_REQUEST = 'FACEBOOK_SYNC_REQUEST'
export const FACEBOOK_SYNC_POST_SUCCESS = 'FACEBOOK_SYNC_POST_SUCCESS'
export const FACEBOOK_SYNC_GET_SUCCESS = 'FACEBOOK_SYNC_GET_SUCCESS'
export const FACEBOOK_SYNC_FAILURE = 'FACEBOOK_SYNC_FAILURE'

export const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST'
export const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS'
export const SEND_CONTACT_FAILURE = 'SEND_CONTACT_FAILURE'

// Regex
// export const REGEX_EMAIL = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
// export const REGEX_NAME = /^.{2,10}$/
// export const REGEX_CONTAIN_SPECIAL_CHAR = /[$-/:-?{-~!"^_`\[\]@#\\]/
export const REGEX_OVER_8_NUMBER_DETECTED = /(.*\d.*){9,}/
export const REGEX_FIRST_CHAR_IS_NUMBER = /^[\d].*/
export const REGEX_MESSAGE = /^.{20,1024}$/
export const REGEX_DOB = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

// Social Link
export const FACEBOOK_URL = 'https://facebook.com/ymeet.me'
export const TWITTER_URL = 'https://twitter.com/Ymeetme'
export const BLOG_URL = 'https://ymeet.me/blog/'

export const BOOST_RANK_COST = 30
export const RANDOM_MATCH_COST = 25
export const UNLOCK_WHO_LIKE_ME_COST = 250
export const PUSH_NOTI_MODAL_LIKE = 1
export const PUSH_NOTI_MODAL_FOOTPRINT = 2

// Payment intention
export const COIN_REWARD_URL = `${CDN_URL}/general/Payment/Coins/`
export const COIN_REWARD_RIBBON_BLUE = `${CDN_URL}/general/Payment/Coins/coin_reward_ribbon-blue.png`
export const COIN_REWARD_RIBBON_PINK = `${CDN_URL}/general/Payment/Coins/ribbon-pink.png`
export const PAYMENT_INTENTION_BOOST_RANK = 'PAYMENT_INTENTION_BOOST_RANK'
export const PAYMENT_INTENTION_UNLOCK_WHO_LIKE_ME = 'PAYMENT_INTENTION_UNLOCK_WHO_LIKE_ME'

// Payment trust mark
export const TRUST_MARK_URL = `${CDN_URL}/general/Payment/TrustMark/`
export const UNLOCK_WHO_LIKE_ME_PARAMS = 'coin_consume_unlock_people_like_me'

// Super Like
export const SUPER_LIKE_URL = `${CDN_URL}/bow-pink.png`
