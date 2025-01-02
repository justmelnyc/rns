import {footerMenu} from '@/data/menu'
import {List, Show} from '@/components/utils'
import Link from 'next/link'
import {makeTag} from '@/utils'

function Footer() {
    return (
        <>
            <footer className="Footer_wrapper">
                <div className="Footer_top">
                    <FooterLogo/>
                    <div className="Footer_navigation">
                        <List from={footerMenu} className="Navigation_wrapper">
                            {(column) => (
                                <div className="Navigation_wrapper Navigation_nested">
                                    <List from={column}>
                                        {(section, index) => (
                                            <div className="Navigation_group">
                                                <div className="Navigation_item">
                                                    <span>{section.title}</span>
                                                    <Show when={section.count}>
                                                        <sup className="Sup_wrapper styling_mono">
                                                            [{makeTag(section?.count || 0)}]
                                                        </sup>
                                                    </Show>
                                                </div>
                                                <div className="Navigation_children">
                                                    <List from={section.items.map(i=> ({id: i, label: i}))}>
                                                        {({label}) => (
                                                            <Link
                                                                className="TextButton_wrapper Navigation_subitem TextButton_grey TextButton_hoverable"
                                                                href="/">
                                                                <span className="TextButton_content">{label}</span>
                                                            </Link>
                                                        )}
                                                    </List>
                                                </div>
                                                <Show when={index < footerMenu.length - 1}>
                                                    <div className="Navigation_spacer"/>
                                                </Show>
                                            </div>
                                        )}
                                    </List>
                                </div>
                            )}
                        </List>
                    </div>
                </div>
                <div className="Footer_bottom">
                    <FooterUtilities/>
                    <FooterForm/>
                    <FooterLogoSmall/>
                </div>
            </footer>
        </>
    )
}

export default Footer


function FooterForm() {
    return (
        <div className="FooterNewsletter_wrapper Footer_newsletter">
            <form action="#" className="FooterNewsletter_form">
                <h4 className="FooterNewsletter_title">Newsletter</h4>
                <div className="Input_wrapper FooterNewsletter_input">
                    <div className="Input_inner">
                        <input
                            className="Input_input"
                            name="email"
                            placeholder="Enter your email"
                            defaultValue=""
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

function FooterUtilities() {
    return (
        <div className="Footer_utilities styling_s">
          <span className="Footer_copyrights">
            © RNS Run – Nutrition – Strength.
          </span>
            <div className="Navigation_wrapper Footer_list">
                <Link
                    className="Navigation_item TextButton_hoverable"
                    href="/"
                >
                    <span className="TextButton_content">GCS</span>
                </Link>
                <Link
                    className="Navigation_item TextButton_hoverable"
                    href="/"
                >
                    <span className="TextButton_content">Legal notice</span>
                </Link>
            </div>
        </div>
    )
}
function FooterLogo() {
    return (
        <Link className="Footer_link" href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 884 235"
                fill="none"
                label-aria="Tolix"
                className="Icons_logo Footer_logo"
            >
                <path
                    fill="#191919"
                    d="M162.2 7.3H0v48.5h52.5v171.9h57.3V55.8h52.4V7.3Zm299.5 0h-57.3v220.4H552v-48.5h-90.4V7.3Zm166.4 0h-57.4v220.4h57.4V7.3ZM798 112.7 875.3 7.3H806l-42.4 62.4L719 7.3h-71l81.9 105.4-86.8 115h70l50.5-70.7 50.8 70.7H884l-86-115ZM286.6.6a117.6 117.6 0 1 0-24 234 117.6 117.6 0 0 0 24-234ZM336 128a62.2 62.2 0 0 1-50.9 50.9 62.3 62.3 0 0 1-72-72 62.2 62.2 0 0 1 51-50.8 62.3 62.3 0 0 1 71.9 72Z"
                />
            </svg>
        </Link>
    )
}

function FooterLogoSmall() {
    return (
        <div className="Footer_infos styling_s ">
            <div className="Footer_logoSmall">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 197 29"
                    className="Icons_logoFooter"
                >
                    <path
                        fill="#191919"
                        d="m117.21 7.844 2.574-6.345h1.062l2.628 6.345h-1.008l-.657-1.692h-2.997l-.648 1.692h-.954Zm1.872-2.43h2.448l-1.242-3.168-1.206 3.168Zm7.658 2.565c-1.413 0-2.475-.864-2.475-2.547V1.499h.882v3.969c0 1.25.801 1.683 1.593 1.683.783 0 1.593-.432 1.593-1.683v-3.97h.882v3.934c0 1.7-1.053 2.547-2.475 2.547Zm5.665-.135v-5.58h-2.133v-.765h5.157v.765h-2.133v5.58h-.891Zm6.552.135c-1.413 0-2.475-.864-2.475-2.547V1.499h.882v3.969c0 1.25.801 1.683 1.593 1.683.783 0 1.593-.432 1.593-1.683v-3.97h.882v3.934c0 1.7-1.053 2.547-2.475 2.547Zm4.189-.135V1.499h1.341l3.024 5.256V1.499h.882v6.345h-1.215l-3.15-5.49v5.49h-.882Zm6.617 1.053c.513-.135.774-.441.792-.99-.036.009-.072.009-.108.009-.414 0-.612-.27-.612-.603 0-.324.225-.594.567-.594.351 0 .729.26.729.999 0 .864-.495 1.485-1.368 1.656v-.477Zm4.703-1.053V1.499h3.996v.765h-3.114v1.962h2.799v.756h-2.799v2.862h-.882Zm5.212 0V1.499h2.916c1.098 0 1.944.675 1.944 1.755 0 1.053-.846 1.674-1.782 1.728l1.962 2.862h-1.098l-1.872-2.853h-1.188v2.853h-.882Zm.882-3.6h1.899c.747 0 1.143-.37 1.143-.99 0-.621-.396-.99-1.143-.99h-1.899v1.98Zm4.674 3.6 2.574-6.345h1.062l2.628 6.345h-1.008l-.657-1.692h-2.997l-.648 1.692h-.954Zm1.872-2.43h2.448l-1.242-3.168-1.206 3.168Zm5.431 2.43V1.499h1.341l3.024 5.256V1.499h.882v6.345h-1.215l-3.15-5.49v5.49h-.882Zm9.731.135c-1.845 0-3.105-1.36-3.105-3.312 0-1.881 1.224-3.303 3.114-3.303 2.007 0 2.871 1.359 3.033 2.484h-.945c-.189-.891-.783-1.701-2.097-1.701-1.224 0-2.169.9-2.169 2.52 0 1.61.945 2.52 2.169 2.52 1.314 0 1.926-.81 2.106-1.71h.954c-.135 1.116-1.017 2.502-3.06 2.502Zm4.357-.135V1.499h4.221v.765h-3.339v1.962h3.042v.756h-3.042V7.07h3.339v.774h-4.221Zm-68.695 10v-6.345h1.467l1.926 5.454 1.944-5.454h1.413v6.345h-.864l.018-5.634-2.007 5.634h-1.044l-2.007-5.634.009 5.634h-.855Zm7.814 0 2.574-6.345h1.062l2.628 6.345H131l-.657-1.692h-2.997l-.648 1.692h-.954Zm1.872-2.43h2.448l-1.242-3.168-1.206 3.168Zm5.431 2.43v-6.345h1.341l3.024 5.256v-5.256h.882v6.345h-1.215l-3.15-5.49v5.49h-.882Zm9.435.135c-1.413 0-2.475-.864-2.475-2.547v-3.933h.882v3.969c0 1.25.801 1.683 1.593 1.683.783 0 1.593-.432 1.593-1.683v-3.97h.882v3.934c0 1.7-1.053 2.547-2.475 2.547Zm4.188-.135v-6.345h3.996v.765h-3.114v1.962h2.799v.756h-2.799v2.862h-.882Zm3.974 0 2.574-6.345h1.062l2.628 6.345H155.9l-.657-1.692h-2.997l-.648 1.692h-.954Zm1.872-2.43h2.448l-1.242-3.168-1.206 3.168Zm7.911 2.565c-1.845 0-3.105-1.36-3.105-3.312 0-1.881 1.224-3.303 3.114-3.303 2.007 0 2.871 1.359 3.033 2.484h-.945c-.189-.891-.783-1.701-2.097-1.701-1.224 0-2.169.9-2.169 2.52 0 1.61.945 2.52 2.169 2.52 1.314 0 1.926-.81 2.106-1.71h.954c-.135 1.116-1.017 2.502-3.06 2.502Zm5.57-.135v-5.58h-2.133v-.765h5.157v.765h-2.133v5.58h-.891Zm6.552.135c-1.413 0-2.475-.864-2.475-2.547v-3.933h.882v3.969c0 1.25.801 1.683 1.593 1.683.783 0 1.593-.432 1.593-1.683v-3.97h.882v3.934c0 1.7-1.053 2.547-2.475 2.547Zm4.189-.135v-6.345h2.916c1.098 0 1.944.675 1.944 1.755 0 1.053-.846 1.674-1.782 1.728l1.962 2.862h-1.098l-1.872-2.853h-1.188v2.853h-.882Zm.882-3.6h1.899c.747 0 1.143-.37 1.143-.99 0-.621-.396-.99-1.143-.99h-1.899v1.98Zm5.437 3.6v-6.345h.882v6.345h-.882Zm2.663 0v-6.345h4.221v.765h-3.339v1.962h3.042v.756h-3.042v2.088h3.339v.774h-4.221Zm5.66 0v-6.345h2.916c1.098 0 1.944.675 1.944 1.755 0 1.053-.846 1.674-1.782 1.728l1.962 2.862h-1.098l-1.872-2.853h-1.188v2.853h-.882Zm.882-3.6h1.899c.747 0 1.143-.37 1.143-.99 0-.621-.396-.99-1.143-.99h-1.899v1.98ZM117.57 25.36v-.702h7.164v.702h-7.164Zm12.06 2.484v-5.346l-1.863 1.377v-.936l1.935-1.44h.756v6.345h-.828Zm2.959 0 1.962-2.412c-.171.08-.486.126-.756.126-1.089 0-2.016-.801-2.016-1.962 0-1.17.864-2.232 2.25-2.232 1.395 0 2.232 1.035 2.232 2.106 0 1.098-.801 2.097-1.179 2.565l-1.449 1.809h-1.044Zm.045-4.338c0 .783.594 1.377 1.395 1.377.783 0 1.368-.594 1.368-1.377 0-.792-.585-1.386-1.368-1.386-.801 0-1.395.594-1.395 1.386Zm6.864 1.413c.612-.73.873-1.161.873-1.737 0-.594-.351-1.098-1.143-1.098-.882 0-1.197.702-1.098 1.602h-.846c-.117-1.431.63-2.322 1.953-2.322 1.386 0 2.007.873 2.007 1.746 0 .909-.522 1.602-1.224 2.403l-1.377 1.575h2.718v.756h-4.347l2.484-2.925Zm3.28 2.925 2.484-5.598h-3.258v-.747h4.455l-2.79 6.345h-.891ZM19.331 1.594H0v5.782h6.25v20.476h6.831V7.376h6.25V1.594Zm35.677 0H48.18v26.258h17.606v-5.78H55.008V1.595Zm19.827 0h-6.831v26.258h6.83V1.594ZM95.08 14.149l9.209-12.555h-8.26l-5.044 7.434-5.313-7.434h-8.47l9.76 12.555-10.333 13.703h8.328l6.028-8.427 6.05 8.427h8.292L95.08 14.15ZM34.151.794c-8.86-.88-16.247 6.501-15.37 15.356.675 6.827 6.394 12.229 13.25 12.555 8.276.395 15.07-6.392 14.677-14.667C46.382 7.186 40.98 1.471 34.148.791l.003.003Zm5.885 15.183c-.505 3.073-2.983 5.553-6.06 6.056a7.428 7.428 0 0 1-8.576-8.57c.504-3.073 2.986-5.553 6.063-6.054a7.427 7.427 0 0 1 8.573 8.568Z"
                    />
                </svg>
            </div>
        </div>
    )
}