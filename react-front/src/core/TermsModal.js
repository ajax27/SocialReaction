import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class TermsModal extends Component {
  state = {
    modal6: false,
    modal7: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="indigo darken-4" onClick={this.toggle(8)}>Terms of Service</MDBBtn>
        <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
          <MDBModalHeader toggle={this.toggle(8)}>Terms of Service</MDBModalHeader>
          <MDBModalBody>
            <div>
              <h5>LAST REVISION: [21/04/2019]</h5>
              <hr />
              <h5>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.</h5>
              <p>This Terms of Service Agreement (the "Agreement") governs your use of this website, [blogger.ajax27.com] (the "Website"), [Ajax27 Design and Development] ("Business Name") offer of products for purchase on this Website, or your purchase of products available on this Website. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. [Ajax27 Design and Development] reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website.</p>
              <p>[Ajax27 Design and Development] will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions.</p>
              <p>[Ajax27 Design and Development] encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with [Ajax27 Design and Development] for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website.  If you would like to print this Agreement, please click the print button on your browser toolbar.</p>
              <hr />
              <h3>I. PRODUCTS</h3>
              <p>Terms of Offer. This Website offers for sale certain products (the "Products"). By placing an order for Products through this Website, you agree to the terms set forth in this Agreement. </p>
              <p>Customer Solicitation: Unless you notify our third party call center reps or direct [Ajax27 Design and Development] sales reps, while they are calling you, of your desire to opt out from further direct company communications and solicitations, you are agreeing to continue to receive further emails and call solicitations [Ajax27 Design and Development] and its designated in house or third party call team(s).</p>
              <p>Opt Out Procedure: We provide 3 easy ways to opt out of from future solicitations.
                1. You may use the opt out link found in any email solicitation that you may receive.
              2. You may also choose to opt out, via sending your email address to: [shaun@blogger.ajax27.com].</p>
              <p>Proprietary Rights. [Ajax27
              Design and Development] has proprietary rights and trade secrets
              in the Products. You may not copy, reproduce, resell or redistribute any
              Product manufactured and/or distributed by [Ajax27 Design and Development].
              [Ajax27 Design and Development] also has rights to all
              trademarks and trade dress and specific layouts of this webpage, including
            calls to action, text placement, images and other information.</p>

              <p>Sales Tax. If you
              purchase any Products, you will be responsible for paying any applicable sales
            tax.</p>

              <p><strong>II. WEBSITE</strong></p>

              <p>Content; Intellectual
              Property; Third Party Links. In addition to making Products available, this
              Website also offers information and marketing materials. This Website also
              offers information, both directly and through indirect links to third-party
              websites, about nutritional and dietary supplements. [Ajax27 Design and Development] does not
              always create the information offered on this Website; instead the information
              is often gathered from other sources. To the extent that [Ajax27 Design and Development]
              does create the content on this Website, such content is protected by
              intellectual property laws of the India, foreign nations, and international
              bodies. Unauthorized use of the material may violate copyright, trademark,
              and/or other laws. You acknowledge that your use of the content on this Website
              is for personal, noncommercial use. Any links to third-party websites are
              provided solely as a convenience to you. [Ajax27 Design and Development] does not endorse
              the contents on any such third-party websites. [Ajax27 Design and Development] &nbsp;is not responsible for the content of or any
              damage that may result from your access to or reliance on these third-party
            websites. If you link to third-party websites, you do so at your own risk.&nbsp;</p>


              <p>Use of Website; [Ajax27
              Design and Development] is not responsible for any damages
              resulting from use of this website by anyone. You will not use the Website for
              illegal purposes. You will (1) abide by all applicable local, state, national,
              and international laws and regulations in your use of the Website (including
              laws regarding intellectual property), (2) not interfere with or disrupt the
              use and enjoyment of the Website by other users, (3) not resell material on the
              Website, (4) not engage, directly or indirectly, in transmission of
              "spam", chain letters, junk mail or any other type of unsolicited
              communication, and (5) not defame, harass, abuse, or disrupt other users of the
            Website</p>

              <p>License. By using this
              Website, you are granted a limited, non-exclusive, non-transferable right to
              use the content and materials on the Website in connection with your normal,
              noncommercial, use of the Website. You may not copy, reproduce, transmit,
              distribute, or create derivative works of such content or information without
              express written authorization from [Ajax27 Design and Development]
            or the applicable third party (if third party content is at issue).</p>

              <p>Posting. By posting,
              storing, or transmitting any content on the Website, you hereby grant [Ajax27 Design and Development]
              a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and
              license to use, copy, display, perform, create derivative works from,
              distribute, have distributed, transmit and assign such content in any form, in
              all media now known or hereinafter created, anywhere in the world. [Ajax27 Design and Development]
              does not have the ability to control the nature of the user-generated content
              offered through the Website. You are solely responsible for your interactions
              with other users of the Website and any content you post. [Ajax27 Design and Development]
              is not liable for any damage or harm resulting from any posts by or
              interactions between users. [Ajax27
              Design and Development] reserves the right, but has no obligation, to
              monitor interactions between and among users of the Website and to remove any
              content [Ajax27 Design and
              Development] &nbsp;deems objectionable,
            in MuscleUP Nutrition 's sole discretion.&nbsp;</p>

              <p><strong>III.
            DISCLAIMER OF WARRANTIES</strong></p>

              <p>YOUR USE OF THIS
              WEBSITE AND/OR PRODUCTS ARE AT YOUR SOLE RISK. THE WEBSITE AND PRODUCTS ARE
              OFFERED ON AN "AS IS" AND "AS AVAILABLE" BASIS. [Ajax27
              Design and Development] EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY
              KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NON-INFRINGEMENT WITH RESPECT TO THE PRODUCTS OR WEBSITE CONTENT, OR ANY
              RELIANCE UPON OR USE OF THE WEBSITE CONTENT OR PRODUCTS. ("PRODUCTS"
            INCLUDE TRIAL PRODUCTS.)</p>

              <p>WITHOUT LIMITING THE
              GENERALITY OF THE FOREGOING, [Ajax27 Design and Development]
            &nbsp;MAKES NO WARRANTY:</p>

              <p>THAT THE INFORMATION
            PROVIDED ON THIS WEBSITE IS ACCURATE, RELIABLE, COMPLETE, OR TIMELY.</p>

              <p>THAT THE LINKS TO
              THIRD-PARTY WEBSITES ARE TO INFORMATION THAT IS ACCURATE, RELIABLE, COMPLETE,
            OR TIMELY.</p>

              <p>NO ADVICE OR
              INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THIS WEBSITE WILL
            CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.&nbsp;</p>

              <p>AS TO THE RESULTS THAT
              MAY BE OBTAINED FROM THE USE OF THE PRODUCTS OR THAT DEFECTS IN PRODUCTS WILL
            BE CORRECTED.&nbsp;</p>

              <p>REGARDING ANY PRODUCTS
            PURCHASED OR OBTAINED THROUGH THE WEBSITE.</p>

              <p>SOME JURISDICTIONS DO
              NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS
            MAY NOT APPLY TO YOU.</p>

              <p><strong>IV. LIMITATION OF LIABILITY</strong></p>

              <p>[Ajax27
              Design and Development] ENTIRE LIABILITY, AND YOUR EXCLUSIVE
              REMEDY, IN LAW, IN EQUITY, OR OTHWERWISE, WITH RESPECT TO THE WEBSITE CONTENT
              AND PRODUCTS AND/OR FOR ANY BREACH OF THIS AGREEMENT IS SOLELY LIMITED TO THE
              AMOUNT YOU PAID, LESS SHIPPING AND HANDLING, FOR PRODUCTS PURCHASED VIA THE
            WEBSITE.</p>

              <p>[Ajax27 Design and
              Development] WILL NOT BE
              LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES
              IN CONNECTION WITH THIS AGREEMENT OR THE PRODUCTS IN ANY MANNER, INCLUDING
              LIABILITIES RESULTING FROM (1) THE USE OR THE INABILITY TO USE THE WEBSITE
              CONTENT OR PRODUCTS; (2) THE COST OF PROCURING SUBSTITUTE PRODUCTS OR CONTENT;
              (3) ANY PRODUCTS PURCHASED OR OBTAINED OR TRANSACTIONS ENTERED INTO THROUGH THE
            WEBSITE; OR (4) ANY LOST PROFITS YOU ALLEGE.</p>

              <p>SOME JURISDICTIONS DO
              NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
            CONSEQUENTIAL DAMAGES SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>

              <p><strong>V. INDEMNIFICATION</strong></p>

              <p>You will release,
              indemnify, defend and hold harmless [Ajax27 Design and Development], and any of its contractors,
              agents, employees, officers, directors, shareholders, affiliates and assigns
              from all liabilities, claims, damages, costs and expenses, including reasonable
              attorneys' fees and expenses, of third parties relating to or arising out of
              (1) this Agreement or the breach of your warranties, representations and
              obligations under this Agreement; (2) the Website content or your use of the
              Website content; (3) the Products or your use of the Products (including Trial
              Products); (4) any intellectual property or other proprietary right of any
              person or entity; (5) your violation of any provision of this Agreement; or (6)
              any information or data you supplied to [Ajax27 Design and Development]. When [Ajax27 Design and Development]
              is threatened with suit or sued by a third party, [Ajax27 Design and Development] may seek
              written assurances from you concerning your promise to indemnify [Ajax27 Design and Development];
              your failure to provide such assurances may be considered by [Ajax27 Design and Development]
              to be a material breach of this Agreement. [Ajax27 Design and Development] will have the
              right to participate in any defense by you of a third-party claim related to
              your use of any of the Website content or Products, with counsel of [Ajax27 Design and Development]
              choice at its expense. [Ajax27
              Design and Development] will reasonably cooperate in any defense by you
              of a third-party claim at your request and expense. You will have sole
              responsibility to defend [Ajax27
              Design and Development] against any claim, but you must receive [Ajax27 Design and Development]
              prior written consent regarding any related settlement. The terms of this
              provision will survive any termination or cancellation of this Agreement or
            your use of the Website or Products.</p>

              <p><strong>VI. PRIVACY</strong></p>

              <p>[Ajax27 Design and Development]
              believes strongly in protecting user privacy and providing you with notice of
              MuscleUP Nutrition 's use of data. Please refer to [Ajax27 Design and Development] privacy
            policy, incorporated by reference herein, that is posted on the Website.</p>

              <p><strong>VI. AGREEMENT TO BE BOUND</strong></p>

              <p>By using this Website
              or ordering Products, you acknowledge that you have read and agree to be bound
            by this Agreement and all terms and conditions on this Website.&nbsp;</p>

              <p><strong>VIII. GENERAL</strong></p>

              <p>Force Majeure. [Ajax27
              Design and Development] will not be deemed in default hereunder
              or held responsible for any cessation, interruption or delay in the performance
              of its obligations hereunder due to earthquake, flood, fire, storm, natural
              disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or
            boycott.</p>

              <p>Cessation of Operation.
              [Ajax27 Design and Development] may at any time, in its
              sole discretion and without advance notice to you, cease operation of the
            Website and distribution of the Products.</p>

              <p>Entire Agreement. This
              Agreement comprises the entire agreement between you and [Ajax27
              Design and Development] and supersedes any prior agreements
            pertaining to the subject matter contained herein.</p>
              <p>Effect of Waiver. The
              failure of [Ajax27 Design and Development] to exercise
              or enforce any right or provision of this Agreement will not constitute a
              waiver of such right or provision. If any provision of this Agreement is found
              by a court of competent jurisdiction to be invalid, the parties nevertheless
              agree that the court should endeavor to give effect to the parties' intentions
              as reflected in the provision, and the other provisions of this Agreement
            remain in full force and effect.</p>

              <p>Governing Law; United Kingdom. This
              Website originates from the [Slough,
              Berkshire]. This Agreement will be governed by the laws of the State of [United
              Kingdom] without regard to its conflict of law principles to the contrary.
              Neither you nor [Ajax27 Design and Development] will
              commence or prosecute any suit, proceeding or claim to enforce the provisions
              of this Agreement, to recover damages for breach of or default of this
              Agreement, or otherwise arising under or by reason of this Agreement, other
              than in courts located in State of [Berkshire]. By using this Website or ordering Products, you
              consent to the jurisdiction and venue of such courts in connection with any
              action, suit, proceeding or claim arising under or by reason of this Agreement.
              You hereby waive any right to trial by jury arising out of this Agreement and
            any related documents.</p>

              <p>Statute of Limitation.
              You agree that regardless of any statute or law to the contrary, any claim or
              cause of action arising out of or related to use of the Website or Products or
              this Agreement must be filed within one (1) year after such claim or cause of
            action arose or be forever barred.</p>

              <p>Waiver of Class Action
              Rights. BY ENTERING INTO THIS AGREEMENT, YOU HEREBY IRREVOCABLY WAIVE ANY RIGHT
              YOU MAY HAVE TO JOIN CLAIMS WITH THOSE OF OTHER IN THE FORM OF A CLASS ACTION
              OR SIMILAR PROCEDURAL DEVICE. ANY CLAIMS ARISING OUT OF, RELATING TO, OR
            CONNECTION WITH THIS AGREEMENT MUST BE ASSERTED INDIVIDUALLY.</p>

              <p>Termination. [Ajax27
              Design and Development] reserves the right to terminate your
              access to the Website if it reasonably believes, in its sole discretion, that
              you have breached any of the terms and conditions of this Agreement. Following
              termination, you will not be permitted to use the Website and [Ajax27
              Design and Development] may, in its sole discretion and without
              advance notice to you, cancel any outstanding orders for Products. If your
              access to the Website is terminated, [Ajax27 Design and Development]
              reserves the right to exercise whatever means it deems necessary to
              prevent unauthorized access of the Website. This Agreement will survive
              indefinitely unless and until [Ajax27 Design and Development]
              chooses, in its sole discretion and without advance to you, to terminate
            it.</p>

              <p>Domestic Use. [Ajax27 Design and Development] makes no representation that the Website or Products are appropriate or available for use in locations outside India. Users who access the Website from outside India do so at their own risk and initiative and must bear all responsibility for compliance with any applicable local laws.<br />Assignment. You may not assign your rights and obligations under this Agreement to anyone. [Ajax27 Design and Development] may assign its rights and obligations under this Agreement in its sole discretion and without advance notice to you.</p>
              <p>BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE&nbsp;<br />TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo darken-4" onClick={this.toggle(8)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBBtn color="indigo darken-4" onClick={this.toggle(9)}>Privacy Policy</MDBBtn>
        <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="left">
          <MDBModalHeader toggle={this.toggle(9)}>Privacy Policy</MDBModalHeader>
          <MDBModalBody>

            <h2>Who we are</h2>
            <h5 style={{ color: '#dd3838' }}> Scroll Right-Side</h5>
            <p>Our website address is: https://blogger.ajax27.com.</p>

            <h2>What personal data we collect and why we collect it</h2>

            <h3>Comments</h3>

            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>

            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

            <h3>Media</h3>

            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

            <h3>Contact forms</h3>

            <h3>Cookies</h3>

            <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>

            <p>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>

            <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>

            <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>

            <h3>Embedded content from other websites</h3>

            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

            <h3>Analytics</h3>

            <h2>Who we share your data with</h2>

            <h2>How long we retain your data</h2>

            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>

            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>

            <h2>What rights you have over your data</h2>

            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>

            <h2>Where we send your data</h2>

            <p>Visitor comments may be checked through an automated spam detection service.</p>

            <h2>Your contact information</h2>

            <h2>Additional information</h2>

            <h3>How we protect your data</h3>

            <h3>What data breach procedures we have in place</h3>

            <h3>What third parties we receive data from</h3>

            <h3>What automated decision making and/or profiling we do with user data</h3>

            <h3>Industry regulatory disclosure requirements</h3>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="indigo darken-4" onClick={this.toggle(9)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default TermsModal;
