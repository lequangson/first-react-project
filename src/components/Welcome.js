import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router'
import FileInput from 'react-file-reader-input'
import Modal from 'react-modal'
import _ from 'lodash'
import {
    CDN_URL
} from '../constants/Enviroment'


export const WELCOME_PAGE_1 = 1
export const WELCOME_PAGE_2 = 2
export const WELCOME_PAGE_3 = 3
export const WELCOME_PAGE_4 = 4
export const WELCOME_COMPLETED = 5

class Welcome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file: {},
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.completePage = this.completePage.bind(this)
  }

  completePage(pageNo, ev) {
    return this.props.updateWelcomePageCompletion(pageNo)
  }

  openModal() {
    this.setState(
      {
        modalIsOpen: true
      }
    )
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  handleClick(ev) {
    // ev.preventDefault();
    // ev.stopPropagation();
    let toggle = ev.currentTarget.classList;
    if(toggle.contains("toggle--2")) {
      return toggle.remove('toggle--2');
    }
    else {
      toggle.add("toggle--2")
    }
  }

  progressBar(i) {
    return (
    <div className="fixed-bottom">
      <div className="col-xs-12">
        <div className="progress">
          <div className="progress__bar-into">
            <div className={`progress__fill-into progress__fill-into--${i}`}></div>
          </div>
          <div className="progress__txt l-flex-sb padding-t10">
            <span>Bước 1</span>
            <span>Bước 2</span>
            <span>Bước 3</span>
            <span>Bước 4</span>
          </div>
        </div>
      </div>
    </div>
    )

  }

  render() {
    const { user_profile } = this.props
    const { current_user } = user_profile
    const {
      nick_name,
      welcome_page_completion
    } = current_user
    const gender = current_user.gender ? current_user.gender : 'male'
    const currentPage = welcome_page_completion + 1
    const welCome = [
      {
        pageNunber: 1,
        url : `${CDN_URL}/general/WelComePage/firecracker.png`,
        text1: 'CHÀO MỪNG BẠN',
        text2: 'ĐẾN VỚI YMEET.ME'
      },
      {
        pageNunber: 2,
        url : `${CDN_URL}/general/WelComePage/Camera.png`,
        text1: 'TẢI ẢNH ĐẠI DIỆN',
        text2: 'CỦA BẠN'
      },
      {
        pageNunber: 3,
        url : `${CDN_URL}/general/WelComePage/Heart.png`,
        text1: 'CHỌN NHỮNG NGƯỜI MÀ <br/> BẠN THẤY THU HÚT',
        text2: 'Ymeet.me sẽ đề xuất <br /> Chính xác hơn cho bạn'
      },
      {
        pageNunber: 4,
        url : `${CDN_URL}/general/WelComePage/Hi-five.png`,
        text1: 'HOÀN TẤT THÔNG TIN',
        text2: 'CỦA BẠN ĐỂ BẮT ĐẦU HẸN HÒ'
      }
    ]

    return (
      <div className="site-content">

        <div className="welcome mbm" >
          {/*<div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="well--sm txt-center">
                    <img src={logo2} className="mbs" width="118" alt="lesonlogo" />
                    <div className="txt-blue">Hẹn hò an toàn cho phụ nữ</div>
                  </div>
                </div>
              </div>
            </div>*/}

          <div className="welcome__content txt-center">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  {welCome.map((page, i) => { 
                      if (currentPage === page.pageNunber) {
                        return (
                          <div className="mbs" key={i}>
                            <img src={page.url} alt="img-70" className="img-70 mbm"/>
                            <div className="txt-bold txt-white txt-xxlg" dangerouslySetInnerHTML={{ __html: page.text1 }}></div>
                            <div className="txt-white txt-xxlg" dangerouslySetInnerHTML={{ __html: page.text2 }}></div>
                          </div>
                        )
                      }
                      return false;
                    }
                  )
                }
              </div>

                {/* user_pictures.length > 0 &&
                  <div>
                    <div className={`frame frame--sm ${isUploadingAvatar ? 'is-loading mbs' : 'mbs'}`} >
                      <img src={userAvatar} alt="leson" />
                    </div>
                    <div className="txt-blue">
                      <span className="txt-lg txt-bold">{nick_name}</span>
                      <br />
                      {age} tuổi
                    </div>
                  </div>
                */}
              </div>
            </div>
          </div>
        </div>
        <div className={`panel ${currentPage === WELCOME_PAGE_1 ? '' : 'hide'}`}>
            <button
              className="btn btn--aqua btn--b mbm"
              onClick={() => this.completePage(WELCOME_PAGE_1)}
            >Tiếp theo</button>
            {this.progressBar(currentPage)}

          </div>
        <div className={`panel ${currentPage === WELCOME_PAGE_2 ? '' : 'hide'}`}>
          <div className="panel__body">
            <div className="container">
              <div className="row mbm">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                  <div>
                    <div className="card__upper" onClick={this.openModal}>
                      <img src={`${CDN_URL}/general/WelComePage/Upload-avatar.jpg`} alt="leson" className="le"/>
                      <div className="clearfix">
                        <span className="card__bottom-center txt-lg txt-bold">{nick_name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3">

                  {(gender === 'female') ? (
                    <div className="l-flex-cspa mbm txt-center">
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nu-4.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Cười lên<br />nào!</div>
                      </div>
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nu-5.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Rõ ràng,<br />đủ sáng</div>
                      </div>
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nu-6.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Ảnh<br />toàn thân</div>
                      </div>
                    </div>
                  ) : (
                    <div className="l-flex-cspa mbm txt-center">
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nam-1.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Cười lên<br />nào!</div>
                      </div>
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nam-2.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Rõ ràng,<br />đủ sáng</div>
                      </div>
                      <div>
                        <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                        <div className="frame frame--sm mbs">
                          <img src={`${CDN_URL}/nam-3.png`} alt="leson" />
                        </div>
                        <div className="txt-light">Ảnh<br />toàn thân</div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
              <div className="clearfix mbl padding-b30 txt-center">
                <div className="col-xs-12">
                  <button
                    className="btn btn--aqua btn--b mbm"
                    onClick={() => this.completePage(WELCOME_PAGE_2)}
                  >Tiếp theo</button>
                  <Link
                  to="/WelcomePage"
                  onClick={(evt) => {
                    evt.preventDefault();
                    this.completePage(0)
                  }}
                  className="txt-underline txt-bold"
                  >quay lại</Link>
                </div>
              </div>
              {this.progressBar(currentPage)}
            </div>
          </div>
        </div>
        <div className={`panel txt-center ${currentPage === WELCOME_PAGE_4 ? '' : 'hide'}`}>
          <Link
          to="/WelcomePage"
          onClick={ evt => {
            evt.preventDefault();
            this.completePage(WELCOME_PAGE_2)
          }}
          className="txt-underline txt-bold"
          >quay lại</Link>
          <div className="page3_panel">
            <div className="panel__body">
            {this.progressBar(currentPage)}
            </div>
          </div>
        </div>
        <div className={`panel ${currentPage === WELCOME_PAGE_3 ? '' : 'hide'}`}>
          <div className="panel__body txt-center">

            <div className="container">

              <div className="row mbl padding-b30">
                <div className="col-xs-12">
                  <button
                    className="btn btn--aqua btn--b mbm"
                    onClick={() => this.completePage(WELCOME_PAGE_3)}
                  >Tiếp theo</button>
                  <Link
                  to="/WelcomePage"
                  onClick={evt => {
                    evt.preventDefault();
                    this.completePage(WELCOME_PAGE_1)}}
                  className="txt-underline txt-bold"
                  >quay lại</Link>
                </div>
              </div>
            </div>
            {this.progressBar(currentPage)}
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modal__content modal__content--3"
          overlayClassName="modal__overlay"
          portalClassName="modal"
          contentLabel=""
        >
          <div className="well well--a well--sm mbm">
            <div className="txt-center txt-bold">Thay đổi ảnh đại diện</div>
          </div>
          <FileInput
            id="my-file-input"
            onChange={this.uploadAvatar}
            accept="image/*">
            <button className="btn btn--b btn--p mbs">Chọn ảnh từ thiết bị</button>
          </FileInput>
          <div className="modal__extra txt-center">
            <div className="txt-bold txt-lg txt-uppercase mbm">Gợi ý từ Ymeet.me</div>
            {
              (gender === 'female') ? (
                <div className="l-flex-cspa mbm">
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nu-1.png`} alt="leson" />
                    </div>
                    <div>Cười lên<br />nào!</div>
                  </div>
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nu-2.png`} alt="leson" />
                    </div>
                    <div>Rõ ràng,<br />đủ sáng</div>
                  </div>
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nu-3.png`} alt="leson" />
                    </div>
                    <div>Ảnh<br />toàn thân</div>
                  </div>
                </div>
              ) : (
                <div className="l-flex-cspa mbm">
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nam-1.png`} alt="leson" />
                    </div>
                    <div>Cười lên<br />nào!</div>
                  </div>
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nam-2.png`} alt="leson" />
                    </div>
                    <div>Rõ ràng,<br />đủ sáng</div>
                  </div>
                  <div>
                    <div className="mbs"><i className="fa fa-check-circle fa-2x txt-green"></i></div>
                    <div className="frame frame--sm mbs">
                      <img src={`${CDN_URL}/nam-3.png`} alt="leson" />
                    </div>
                    <div>Ảnh<br />toàn thân</div>
                  </div>
                </div>
              )
            }
            <div className="well well--sm">

            <Link to="/helps/6/2">Tham khảo bí kíp chọn ảnh hợp lệ</Link>
            </div>
          </div>


          <button className="modal__btn-close" onClick={this.closeModal}>
            <i className="fa fa-times"></i>
          </button>
        </Modal>
      </div>
    )
  }
}

Welcome.propTypes = {
  updateUserProfile: PropTypes.func,
  dictionaries: PropTypes.object,
  user_profile: PropTypes.object,
  modalShowNext: PropTypes.func,
  validateImage: PropTypes.func,
  saveImage: PropTypes.func,
}

export default Welcome