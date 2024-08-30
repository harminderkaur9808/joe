import React from 'react';
import '../styles/Member-policy.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const MemberPolicy = () => {


  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-heading');
    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          const id = section.getAttribute('id');
          if (id) {
            current = id;
          }
        }
      });
      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>
    <Header/>

    <section className='Main-Member-IC'>
      <section className="breadcrumb-nav-list">
        <h5 className="breadcrumb-line-title">
          <a className="breadcrumb-link" href="#">Home</a>
          <span className="breadcrumb-slash">/</span>
        </h5>
        <h5 className="breadcrumb-line-title">
          <a className="breadcrumb-link" href="#">My Account</a>
          <span className="breadcrumb-slash">/</span>
        </h5>
        <h5 className="breadcrumb-line-title">
          <a className="breadcrumb-link breadcrumb-last-nav" href="#">Get more points</a>
          <span className="breadcrumb-slash"></span>
        </h5>
      </section>
      <div className='Member_System_container'>
        <h1>Member System Related Rules</h1>
      </div>
      <section className='rule_memberSystemRuleBox__zx5OV'>

        {/* Main sidebar  */}

        <div className="rule_main">
          {/* <div className="rule_leftSelect" style={{ top: '266.594px', left: '312.5px' }}> */}
          <div className="rule_leftSelect" style={{  left: '212.5px' }}>

            <div className="rule_pcRulerOption">
              <div className="ant-anchor-wrapper" style={{ maxHeight: '100vh' }}>
                <div className="ant-anchor ant-anchor-fixed">
                  <div className="ant-anchor-ink">
                    <span className="ant-anchor-ink-ball" style={{ top: '29.5px' }}></span>
                  </div>
                  <div>
                    {/* <div className="ant-anchor-link rule_anchorLink rule_activer">
                            <a className="ant-anchor-link-title" href="#pointRules" title="AP Points Rules">AP Points Rules</a>
                        </div> */}
                    <div className={`ant-anchor-link rule_anchorLink ${activeHeading === 'pointRules' ? 'active-heading' : ''}`}>
                      <a className="ant-anchor-link-title" href="#pointRules" title="AP Points Rules">AP Points Rules</a>
                    </div>
                  </div>
                  <div>
                    <div className="ant-anchor-link rule_anchorLink">
                      {/* <a className="ant-anchor-link-title" href="#levelRule" title="AP VIP Levels and Rights Rules">AP VIP Levels and Rights Rules</a> */}
                      <div className={`ant-anchor-link rule_anchorLink ${activeHeading === 'levelRule' ? 'active-heading' : ''}`}>
                        <a className="ant-anchor-link-title" href="#levelRule" title="AP VIP Levels and Rights Rules">AP VIP Levels and Rights Rules</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <div className="ant-anchor-link rule_anchorLink">
                            <a className="ant-anchor-link-title" href="#privilegeRule" title="Detailed description of AP VIP privileges">Detailed description of AP VIP privileges</a>
                        </div> */}
                    <div className={`ant-anchor-link rule_anchorLink ${activeHeading === 'privilegeRule' ? 'active-heading' : ''}`}>
                      <a className="ant-anchor-link-title" href="#privilegeRule" title="Detailed description of AP VIP privileges">Detailed description of AP VIP privileges</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="PCMemberRulesOption" style={{ width: '175px' }}>&nbsp;</div>
          </div>
        </div>
        {/* ************************************************************************************************************************************************* */}

        < div className='rule_rightContent__JPLYj'>
          <div className='ml30' id='ruleMain'>
            <div>
              <section className="Member-PolicyPage_content">
                {/* <h2>1. AP POINTS RULES</h2> */}
                {/* <h2 id="levelRule" className="section-heading">2. AP VIP Levels and Rights Rules</h2> */}
                <h2 id="pointRules" className="section-heading">1. AP POINTS RULES</h2>

                                {/* Content for AP POINTS RULES */}

                <h3>I. What are AP points?</h3>
                <p>AP Points are rewards earned for purchases, activities, and tasks on A-Premium. View earned points in the member center. Canceled accounts lose all earned points.</p>

                <h3>II. How to earn AP points?</h3>

                <h4>(I) Confirm your registration</h4>
                <span>Register, fill out the info, subscribe to emails, and earn 120 points.</span>

                <table>
                  <tbody>
                    <tr className="Member-PolicyPage_specialTr__avnPW">
                      <td><span>Create an account</span><span>20</span></td>
                      <td><span>Fill in your birthday</span><span>10</span></td>
                      <td><span>Enter vehicle info</span><span>30</span></td>
                      <td><span>Add shipping address</span><span>10</span></td>
                      <td><span>Verify email</span><span>20</span></td>
                      <td><span>Subscribe to A-Premium</span><span>30</span></td>
                    </tr>
                  </tbody>
                </table>

                <h4>(II) Review our products</h4>
                <span>Earn points by reviewing purchased products. Text reviews earn 30 points, while reviews with pictures/videos earn 50 points. High-quality reviews earn an additional 20 points.</span>

                <table>
                  <tbody>
                    <tr className="Member-PolicyPage_black_Bg_Tr__QWRcu">
                      <td style={{ width: '200px' }}>Post a product review</td>
                      <td style={{ width: '200px' }}>Add pictures/videos</td>
                      <td style={{ width: '200px' }}>High-quality review</td>
                    </tr>
                    <tr>
                      <td style={{ width: '200px' }}>30</td>
                      <td style={{ width: '200px' }}>20</td>
                      <td style={{ width: '200px' }}>20</td>
                    </tr>
                  </tbody>
                </table>

                <h4>(III) Participate in activities</h4>
                <span>Earn points by participating in activities on A-Premium's website. Check the activity homepage or email for rules. Add our email to your contact list to prevent spam.</span>

                <h4>(IV) Shop on A-Premium</h4>
                <p>Buy on A-Premium to earn points equal to 100% of the actual payment amount, including shipping and tax fees. Example: $199.99 payment = 200 points. Points credited after order is shipped.</p>

                <h3>III. How to use AP points?</h3>
                <p>A-Premium website points are independent and displayed on your account. Points cannot be cashed, transferred, sold, or used across accounts.<br />
                  100 points = $1, with a minimum value of 1 dollar for use. Points usage is limited to a proportion of the total amount payable for items in the order, after discounts. Refer to "AP VIP Levels and Rights Rules" for specific right rules. See "Get More Points" on your account for more information about points and its use.<br />
                  Points can be used to redeem benefits such as coupon codes, physical gifts, or shipping fee deductions in the member center of A-Premium. Check specific participation conditions, redemption rules, and other details on corresponding pages.</p>

                <h3>IV. AP Points expiration</h3>
                <p>AP Points do not expire and can remain in your account indefinitely.</p>

                <h3>V. AP points return rules</h3>
                <p><span>If cancel unpaid order, points will return to the account.</span><br />
                  <span>If cancel order before shipping, points will return to the account.</span><br />
                  <span>If refunded after shipping, points used in the order will be returned, but points earned by this order will be deducted. For partial refund, points returned based on a percentage of the refunded item price to the total order price.</span></p>

                <h3 id="levelRule">VI. Breach of contract</h3>
                <p style={{ marginBottom: '30px' }}><span>Breach of points rules or using improper means to obtain or use points may result in deduction of all or part of points. A-Premium may request the user to return the deducted amount or redeemed gifts/benefits. A-Premium has the final interpretation right.</span><br />
                  <span>Note: Starting from September 1, 2022, users meeting the points criteria can receive point gifts. Points won't be awarded retroactively before this date. The program is in a trial phase, and any issues will be announced on the website.</span></p>
              </section>
            </div>
            <div>
              <section className='Member-PolicyPage_content false'>
                {/* <h2>2. AP VIP Levels and Rights Rules</h2> */}
                <h2 id="levelRule" className="section-heading">2. AP VIP LEVELS AND RIGHTS RULES</h2>

                <h3>I. AP VIP</h3>
                <p><span>Welcome to AP VIP, a program that rewards fans with exclusive member promotions, event access, and redeemable rewards.</span>
                  <span>AP VIP is available on A-Premium.com and is applicable to different country/region websites. AP VIP membership is for individuals only and limited to one account per person. Your membership status is tracked with each purchase made, regardless of the site. However, level changes follow the rules of the site where you registered.</span>
                  <span>There are no membership fees for AP VIP.</span></p>
                <h3>II. AP VIP Membership Levels</h3>
                <h4>AP VIP includes three levels: VIP1, VIP2, and VIP3. </h4>
                <span>Membership becomes effective on the second day after order shipment, provided conditions are met. Membership level is determined by purchase count or eligible spending.</span>
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr className="Member-PolicyPage_black_Bg_Tr__QWRcu">
                      <td style={{ width: '110px' }}><span>AP VIP Level</span></td>
                      <td className="MemberRulePage_w338___qZ07 false"><span>Upgrade Rules</span></td>
                    </tr>
                    <tr>
                      <td style={{ width: '110px' }}><span className='Headtable01'>VIP1</span></td>
                      <td className="Member-PolicyPage_w338___qZ07 false">Register</td>
                    </tr>
                    <tr>
                      <td style={{ width: '110px' }}><span className='Headtable01'>VIP2</span></td>
                      <td className="Member-PolicyPage_w338___qZ07 false">Register and purchase $300 within one year</td>
                    </tr>
                    <tr>
                      <td style={{ width: '110px' }}><span className='Headtable01'>VIP3</span></td>
                      <td className="Member-PolicyPage_w338___qZ07 false">At least 2 orders and the total payment should be $600 within one year</td>
                    </tr>
                  </tbody>
                </table>
                <h3>III. AP VIP Membership Benefits</h3>
                <p>AP VIP membership benefits are shown in the following table.</p>
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr className="Member-PolicyPage_black_Bg_Tr__QWRcu">
                      <td className="false"><span>Reward</span></td>
                      <td className="false"><span>VIP1</span></td>
                      <td className="false"><span>VIP2</span></td>
                      <td className="false"><span>VIP3</span></td>
                    </tr>
                    <tr>
                      <td className="false">Exclusive Icon</td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">Membership Points</td>
                      <td className="false">1x Purchase point</td>
                      <td className="false">2x Purchase point</td>
                      <td className="false">3x Purchase point</td>
                    </tr>
                    <tr>
                      <td className="false">Points Discount (maximum)</td>
                      <td className="false">30% off item price</td>
                      <td className="false">40% off item price</td>
                      <td className="false">50% off item price</td>
                    </tr>
                    <tr>
                      <td className="false">First Order Discount</td>
                      <td className="false">0% off</td>
                      <td className="false">10% off</td>
                      <td className="false">20% off</td>
                    </tr>
                    <tr>
                      <td className="false">Member Exclusive Discount</td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">Points Redemption</td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">New Product Alert</td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">Birthday Discount</td>
                      <td className="false">10% off first order</td>
                      <td className="false">15% off first order</td>
                      <td className="false">20% off first order</td>
                    </tr>
                    <tr>
                      <td className="false">Member Month</td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">Exclusive After-Sales Service</td>
                      <td className="false"></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                    <tr>
                      <td className="false">Quarterly Gifts</td>
                      <td className="false"></td>
                      <td className="false"></td>
                      <td className="false"><img src="/Member policy/Check line.png" alt="icon" /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="note">
                  Note: For specific details on membership benefits such as Member Exclusive Discount, Points Redemption, and Member Month, please refer to the corresponding rules of each promotion.
                </p>
                <h3>IV. More Details</h3>
                <h4>(I) Approval</h4>
                <span>Joining our loyalty program means you agree to abide by the rules. A-Premium may change or terminate program features, including rules, rewards, and qualifications, with advance notice.
                  The latest rules are available on the website, and continued program use after rule changes indicates acceptance of the revised rules. Please check the website regularly for updates.</span>
                <h4>(II) Termination and/or Deletion</h4>
                <span>Terminating membership means only guest shopping on A-Premium.com and losing any outstanding points and rewards.</span>
                <h4>(III) Liability Limitation</h4>
                <p><span>If the program cannot run as planned due to fraud or other reasons, A-Premium may modify or suspend the program, resulting in the loss of purchases and cancellation of associated rewards and privileges.</span><span>Misuse, non-compliance, false statements, fraud, or harmful behavior that damages A-Premium's interests may lead to membership revocation and affect further program participation eligibility.</span>
                  <span>A-Premium reserves the right to modify, update, or discontinue AP VIP membership criteria at any time, which may involve changes to level status and rewards. A-Premium has the final interpretation right.</span></p>
                <h4>(IV) Communication</h4>
                <span>A-Premium will notify you of any changes, suspension, or termination of the program through mail, email, or other channels with your permission, and display all changes on this page. Unsubscribing may result in delayed receipt of messages, and you may not receive any compensation for program modifications or suspensions.
                  A-Premium may continue to send you emails regarding account changes and AP VIP membership eligibility.</span>
                <h4 id="privilegeRule">(V) Privacy Policy</h4>
                <span>A-Premium respects your privacy and will protect your personal information according to its privacy policy.
                  Participation in AP VIP implies consent to A-Premium's collection, use, and disclosure of personal information per the privacy policy.</span>
                <h4>(VI) Contact Us</h4>
                <span>Contact A-Premium customer service through the website or email if you have any questions or concerns about AP VIP.</span>
              </section>
            </div>
            <div>
              <section className="Member-PolicyPage_content">
                {/* <h2 className="mt30 detailed-description-title">3. Detailed description of AP VIP privileges</h2> */}

                {/* <h2 id="privilegeRule mt30 detailed-description-title" className="section-heading">3. DETAILED DESCRIPTION OF AP VIP PRIVILEGES</h2> */}
                <h2 id="privilegeRule" className="section-heading">3. DETAILED DESCRIPTION OF AP VIP PRIVILEGES</h2>


                <h3>I. Exclusive Icon</h3>
                <span>Valid for members of level VIP1 and above. Gain it immediately when level upgraded.</span>
                <span>The status of AP VIP is conferred on those who achieve each status' rank according to the times of eligible purchases or the amount of eligible spending during the past 12 months.</span>
                <h3>II. Membership Points</h3>
                <span>Members can earn shopping points when purchasing products on A-Premium, and the specific amount of points earned depends on the member's VIP level and the payment amount.</span>
                <span>For example, VIP1 members can earn the shopping points equals to the actual payment amount. VIP2 members can earn 2 times, and VIP3 members can earn 3 times.</span>
                <span>Shopping points are earned based on the actual payment amount, rounded up to the nearest whole number (e.g., if the payment amount is $99.99, the points earned would be 100 points).</span>
                <h3>III. Points Redemption</h3>
                <span>VIP1 members can use points to offset up to 30% of the product price. VIP2 members up to 40%, and VIP3 members up to 50%.</span>
                <span>For example, if your account(VIP1) has 3000 AP points (100 points = $1, worth $30), and the total amount of your order is 20 USD(free shipping), you can use a maximum of 600 points (equivalent to 6 USD) to offset the payment amount, based on a 30% offset rate. Therefore, the final payment amount will be 14 USD.</span>
                <h3>IV. First Order Discount</h3>
                <span>After upgrading to the corresponding membership level, you can enjoy a payment discount on your first purchase, which cannot be combined with other promotional discount codes.</span>
                <span>VIP2 members can enjoy a 10% discount, and VIP3 members can enjoy a 20% discount.</span>
                <h3>V. Member Discount(follow-up plans)</h3>
                <span>Member-exclusive prices are surprise discounts offered to AP VIP members, allowing members to get the biggest discounts on specific products.</span>
                <span>Members must log into their registered site and choose specific products on the page before placing orders. Member-exclusive prices may vary by country, and products to be selected may be updated from time to time.</span>
                <span>Please note that this reward cannot be transferred or combined with other discounts (except coupons) and can only be redeemed when purchasing merchandise on the A-Premium.com.</span>
                <h3>VI. New Arrival Notifications</h3>
                <span>We will notify you promptly via official channels (website homepage, email) when new products are launched or activities are organized.</span>
                <h3>Ⅶ. Birthday Discount</h3>
                <span>AP VIP members can enjoy a special discount during their birthday month, with VIP1 members receiving a 10% payment discount, VIP2 members receiving a 15% payment discount, and VIP3 members receiving a 20% payment discount.</span>
                <span>Please note that this reward is valid only during the member's birthday month, can be used only once, and cannot be combined with other discount codes.</span>
                <h3>Ⅷ. Membership Month (follow-up plans)</h3>
                <span>A-Premium Member Month refers to September of each year, during which AP VIP members can enjoy multiple shopping points. During this period, members can earn more shopping points than the usual rate when they purchase products on the A-Premium website.</span>
                <span>The specific amount of additional points earned depends on the member's VIP level and the product purchased. For example, VIP1 members can earn 2 times the usual rate, VIP2 members can earn 5 times, and VIP3 members can earn 10 times on their first purchase during the promotion period.</span>
                <span>Please note that this benefit is valid only during A-Premium Member Month, and cannot be combined with other points multipliers.</span>
                <h3>Ⅸ. Exclusive After-Sales Service</h3>
                <span>For VIP2 and above members only.</span>
                <span>An exclusive after-sales service team is available for VIP2 and VIP3 members.</span>
                <h3>Ⅹ. Quarterly Gifts</h3>
                <span>When level VIP3 is achieved, we will provide gifts every quarter, such as free coupons, points (100 points=$1), or compatible products. These gifts cannot be returned or exchanged. Gifts will be distributed through email or by contacting customer service.</span>
                <span>Please add A-Premium to your email contacts and approve our push notifications to avoid missing out on exclusive offers.</span>
              </section>
            </div>



          </div>
        </div>
      </section>
    </section>

<Footer />
    </>
  );
};

export default MemberPolicy;