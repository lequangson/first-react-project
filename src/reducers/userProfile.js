import {
    UPDATE_WELCOMEPAGE_COMPLETION_REQUEST,
    UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS,
    UPDATE_WELCOMEPAGE_COMPLETION_FAILURE
} from '../constants/userProfile'


function profile(state = {
    selected_user: [],
    isFetching_Selected_User: false,
    current_user: {
      welcome_page_completion: 0
    },
    people_liked_me: [],
    errorMsg: '',
    not_payment_list: [],
    people_liked_me_real_time: [],
    visitant_real_time: [],
    favorite_lists: [],
    self_introduction: [],
    isFetching: false,
    isLoaded: false,
    error: false,
    error_message: null,
    upload_avater: false,
    fb_albums: [],
    fb_pictures: [],
    visitants: [],
    welcome_page_completion: 1,
    blocked_users: [],
    muted_users: [],
    blocked_notification: [],
    unblocked_notification: [],
    matched_users: [],
    random_match_users: [],
    isLoadingMatchedUser: false,
    isUploadingAvatar: false,
    total_unread_message:0,
    number_chat_room_has_message: 0,
    isUploadingSubPhoto: false,
    has_message_from_admin: false,
    pack: '',
    like_style: '',
    uploaded_verify_images: false,
    people_liked_my_photo_modal: {},
  }, action) {
  switch (action.type) {
    case UPDATE_WELCOMEPAGE_COMPLETION_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            error: false
        })
    case UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS:
      const page = action.payload  ? action.payload.page_number : action.extentions
      return Object.assign({}, state, {
        current_user: {
          ...state.current_user,
          welcome_page_completion: page,
        },
        isFetching: false,
        error: false,
      })
    case UPDATE_WELCOMEPAGE_COMPLETION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        errorMsg: action.errorMsg,
      })
    default:
      return state
    }
}

export default profile
