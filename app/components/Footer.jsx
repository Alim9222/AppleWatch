import apple from "@/app/assets/icons/apple.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#f0f1f4]">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 flex flex-col">
          <p className="text-[12px] text-gray-500 px-4.5 py-5">
            * Monthly pricing is available when you select Apple Card Monthly
            Installments (ACMI) as payment type at checkout at Apple, and is
            subject to credit approval and credit limit. Financing terms vary by
            product. Taxes and shipping are not included in ACMI and are subject
            to your card’s variable APR. See the Apple Card Customer Agreement
            for more information. ACMI is not available for purchases made
            online at special storefronts. The last month’s payment for each
            product will be the product's purchase price, less all other
            payments at the monthly payment amount. ACMI financing is subject to
            change at any time for any reason, including but not limited to,
            installment term lengths and eligible products. See
            https://support.apple.com/kb/HT211204 for information about upcoming
            changes to ACMI financing. <br /> <br />
          </p>
          <p className="text-[12px] text-gray-500 px-4.5">
            ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option
            that is only available if you select it at checkout in the U.S. for
            eligible products purchased at Apple Store locations, apple.com, the
            Apple Store app, or by calling 1‑800‑MY‑APPLE, and is subject to
            credit approval and credit limit. See support.apple.com/kb/HT211204
            for more information about eligible products. APR ranges may vary
            based on when you accepted an Apple Card. Cardholders who accept an
            Apple Card on and/or after February 1, 2024: Variable APRs for
            Apple Card, other than ACMI, range from 19.24% to 29.49% based on
            creditworthiness. Rates as of February 1, 2024. Existing
            cardholders: See your Customer Agreement for applicable rates and
            fee. If you buy an ACMI eligible product by choosing to pay in full
            with Apple Card (instead of using ACMI), that purchase is subject to
            the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI
            purchases are subject to the variable APR, not 0% APR. When you buy
            an iPhone with ACMI, you’ll need to select AT&T, T‑Mobile, or
            Verizon as your carrier when you check out. An iPhone purchased with
            ACMI is always unlocked, so you can switch carriers at any time.
            ACMI is not available for purchases made online at the following
            special stores: Apple Employee Purchase Plan; participating
            corporate Employee Purchase Programs; Apple at Work for small
            businesses; Government, and Veterans and Military Purchase Programs,
            or on refurbished devices. The last month’s payment for each product
            will be the product’s purchase price, less all other payments at the
            monthly payment amount. ACMI financing is subject to change at any
            time for any reason, including but not limited to, installment term
            lengths and eligible products. See support.apple.com/kb/HT211204 for
            information about upcoming changes to ACMI financing. See the
            Apple Card Customer Agreement for more information about
            ACMI financing.
            <br /> <br />
          </p>
          <p className="text-[12px] text-gray-500 px-4.5">
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch. <br /> <br />
          </p>
          <p className="text-[12px] text-gray-500 px-4.5">
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
            <br /> <br />
          </p>
          <div className="px-5">
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Fitness+ requires iPhone 8 or later or Apple Watch Series 3
              or later paired with iPhone 6s or later. New subscribers only.
              $9.99/month after trial. Plan automatically renews until
              cancelled. Terms apply. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Watch Series 9 and Apple Watch SE have a water resistance
              rating of 50 meters under ISO standard 22810:2010. This means that
              they may be used for shallow- water activities like swimming in a
              pool or ocean. However, they should not be used for scuba diving,
              waterskiing, or other activities involving high-velocity water or
              submersion below shallow depth. Apple Watch Ultra 2 has a water
              resistance rating of 100 meters under ISO standard 22810. It may
              be used for recreational scuba diving (with compatible third-party
              app from the App Store) to 40 meters and high-speed water sports.
              Apple Watch Ultra 2 should not be used for diving below 40 meters.
              Water resistance is not a permanent condition and can diminish
              over time. For additional information see
              support.apple.com/en-us/HT205000. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Watch Series 9 and Apple Watch Ultra 2 are rated IP6X dust
              resistant. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              The ECG app is available on Apple Watch Series 4 and later
              (excluding Apple Watch SE) and can generate an ECG similar to a
              single-lead electrocardiogram. Intended for use by people 22 years
              old and over. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Irregular rhythm notification requires the latest version of
              watchOS and iOS. It is not intended for use by people under 22
              years old or those who have been previously diagnosed with atrial
              fibrillation (AFib). <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              The Cycle Tracking app should not be used for birth control or to
              diagnose a health condition. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Wireless service plan required for cellular service. Contact your
              service provider for more details. Connection may vary based on
              network availability. Check apple.com/watch/cellular for
              participating wireless carriers and eligibility. See
              support.apple.com/HT207578 for additional setup instructions.{" "}
              <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Pay is not available in all markets. For a list of Apple Pay
              countries and regions, visit support.apple.com/en-us/HT207957.{" "}
              <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Cash services are provided by Green Dot Bank, Member FDIC.
              Learn more about the Terms and Conditions. Only available in the
              U.S. on eligible devices. To send and receive money with an Apple
              Cash account, you must be 18 and a U.S. resident. If you’re under
              18, your family organizer can set up Apple Cash for you as part of
              their Apple Cash Family account, but you may not be able to access
              features that require a supported payment card. Security checks
              may require more time to make funds available. Apple Cash Family
              accounts can send up to $2000 per transaction and receive up to
              $2000 within a seven-day period. To access and use all Apple Cash
              features, you must have an eligible device with Wallet that
              supports and has the latest version of iOS. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Only available with select partners and locations, and requires
              eligible device and OS version. See apple.com/wallet for details.{" "}
              <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Apple Music requires a subscription. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Emergency SOS requires a cellular connection or Wi-Fi calling with
              an internet connection from your Apple Watch or nearby iPhone.{" "}
              <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Requires an iPhone and Apple Watch with second-generation Ultra
              Wideband chip. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Claim based on route map accuracy. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              All-day battery life is based on the following use: 180 time
              checks, 180 notifications, 90 minutes of app use, and a 60-minute
              workout with music playback from Apple Watch via Bluetooth, over
              the course of 36 hours; Apple Watch Ultra 2 (GPS + Cellular) usage
              includes a total of 8 hours of LTE connection and 28 hours of
              connection to iPhone via Bluetooth over the course of 36 hours.
              Battery life in Low Power Mode is based on the following use: 360
              time checks, 360 notifications, 180 minutes of app use, and two
              60-minute workouts with music playback from Apple Watch via
              Bluetooth, over the course of 72 hours; Apple Watch Ultra 2 (GPS +
              Cellular) usage includes on-demand LTE connection and 60 hours of
              connection to iPhone via Bluetooth over the course of 72 hours.
              Testing conducted by Apple in August 2023 using preproduction
              Apple Watch Ultra 2 (GPS + Cellular) paired with an iPhone; all
              devices tested with prerelease software. Battery life varies by
              use, configuration, cellular network, signal strength, and many
              other factors; actual results will vary. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Not all features will be available if the Apple Watch is set up
              through Family Setup. Wireless service plan required for cellular
              service. Contact your service provider for more details. Check
              apple.com/watch/cellular for participating wireless carriers and
              eligibility. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              All-day battery life is based on the following use: 90 time
              checks, 90 notifications, 45 minutes of app use, and a 60-minute
              workout with music playback from Apple Watch via Bluetooth, over
              the course of 18 hours; Apple Watch SE (2nd generation) (GPS)
              usage includes connection to iPhone via Bluetooth during the
              entire 18-hour test; Apple Watch SE (2nd generation) (GPS +
              Cellular) usage includes a total of 4 hours of LTE connection and
              14 hours of connection to iPhone via Bluetooth over the course of
              18 hours. Testing conducted by Apple in August 2022 using
              preproduction Apple Watch SE (2nd generation) (GPS) and Apple
              Watch SE (2nd generation) (GPS + Cellular), each paired with an
              iPhone; all devices tested with prerelease software. Battery life
              varies by use, configuration, cellular network, signal strength,
              and many other factors; actual results will vary. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              All-day battery life is based on the following use: 90 time
              checks, 90 notifications, 45 minutes of app use, and a 60-minute
              workout with music playback from Apple Watch via Bluetooth, over
              the course of 18 hours; Apple Watch Series 9 (GPS) usage includes
              connection to iPhone via Bluetooth during the entire 18-hour test;
              Apple Watch Series 9 (GPS + Cellular) usage includes a total of 4
              hours of LTE connection and 14 hours of connection to iPhone via
              Bluetooth over the course of 18 hours. Battery life in Low Power
              Mode is based on the following use: 180 time checks, 180
              notifications, 90 minutes of app use, and a 60-minute workout with
              music playback from Apple Watch via Bluetooth, over the course of
              36 hours; Apple Watch Series 9 (GPS) usage includes connection to
              iPhone via Bluetooth during the entire 36-hour test; Apple Watch
              Series 9 (GPS + Cellular) usage includes on-demand LTE connection
              and 28 hours of connection to iPhone via Bluetooth over the course
              of 36 hours. Testing conducted by Apple in August 2023 using
              preproduction Apple Watch Series 9 (GPS) and Apple Watch Series 9
              (GPS + Cellular), each paired with an iPhone; all devices tested
              with prerelease software. Battery life varies by use,
              configuration, cellular network, signal strength, and many other
              factors; actual results will vary. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Charge times are from 0–80% and 0–100% using the included Apple
              Watch Magnetic Fast Charging USB-C Cable. Testing conducted by
              Apple in August 2023 using preproduction Apple Watch Series 9
              (GPS) and Apple Watch Series 9 (GPS + Cellular), each paired with
              an iPhone; all devices tested with prerelease software, Apple
              Watch Magnetic Fast Charging USB-C Cable (Model A2515), and Apple
              20W USB-C Power Adapter (Model A2305). Charge time varies with
              region, settings, and environmental factors; actual results will
              vary. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Charge times are from 0–80% and 0–100% using the included Apple
              Watch Magnetic Fast Charging USB-C Cable. Testing conducted by
              Apple in August 2023 using preproduction Apple Watch Ultra 2 (GPS
              + Cellular) paired with an iPhone; all devices tested with
              prerelease software, Apple Watch Magnetic Fast Charging USB-C
              Cable (Model A2515), and Apple 20W USB-C Power Adapter (Model
              A2305). Charge time varies with region, settings, and
              environmental factors; actual results will vary. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In-store trade-in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores and
              may vary between in-store and online trade-in. Some stores may
              have additional requirements. Apple or its trade-in partners
              reserve the right to refuse or limit quantity of any trade-in
              transaction for any reason. More details are available from
              Apple’s trade-in partner for trade-in and recycling of eligible
              devices. Restrictions and limitations may apply. <br /> <br />
            </p>{" "}
            <p className="text-[12px] text-gray-500 px-4.5">
              A subscription is required for Apple Fitness+. <br /> <br />
            </p>
          </div>
          <p className="text-[12px] text-gray-500 px-4.5">
            The ability to measure blood oxygen is no longer available on
            Apple Watch units sold by Apple in the United States beginning
            January 18, 2024. These are indicated with part numbers ending in
            LW/A. Learn how to identify your Apple Watch. <br /> <br />
          </p>{" "}
          <p className="text-[12px] text-gray-500 px-4.5">
            Case and band combinations can be made within collections (Apple
            Watch and Apple Watch Hermès) only. <br /> <br />
          </p>{" "}
          <p className="text-[12px] text-gray-500 px-4.5">
            Apple Watch Ultra 2, Apple Watch Series 9, and Apple Watch SE
            require iPhone Xs or later with iOS 17 or later. <br /> <br />
          </p>{" "}
          <p className="text-[12px] text-gray-500 px-4.5">
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all languages. View
            complete list. <br /> <br />
          </p>{" "}
          <p className="text-[12px] text-gray-500 px-4.5">
            Bands are subject to availability. <br /> <br />
          </p>{" "}
          <div className="px-4.5">
            <p className="text-[12px] text-gray-500 inline-block border-b-2 border-gray-300">
              The Oceanic+ app requires Apple Watch Ultra or Apple Watch
              Ultra 2. A subscription is required. Available on the App Store.
              Always follow diving protocols and dive with a companion and have
              a secondary device. <br /> <br />
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 md:flex flex-col hidden">
          <div className="px-4.5">
            <div className="py-2  flex flex-row items-center">
              <Image className="w-9 h-10" src={apple} alt="apple" />
              <p className="text-xs text-gray-500">Watch</p>
            </div>
            <div className="flex flex-row gap-14 pb-5">
              <div className="flex flex-col">
                <p className="text-xs font-bold pb-1">Shop and Learn</p>
                <p className="text-xs pb-1 text-gray-500">Store</p>
                <p className="text-xs pb-1 text-gray-500">Mac</p>
                <p className="text-xs pb-1 text-gray-500">iPad</p>
                <p className="text-xs pb-1 text-gray-500">iPhone</p>
                <p className="text-xs pb-1 text-gray-500">Watch</p>
                <p className="text-xs pb-1 text-gray-500">Vision</p>
                <p className="text-xs pb-1 text-gray-500">AirPods</p>
                <p className="text-xs pb-1 text-gray-500">TV & Home</p>
                <p className="text-xs pb-1 text-gray-500">AirTag</p>
                <p className="text-xs pb-1 text-gray-500">Accessories</p>
                <p className="text-xs pb-5 text-gray-500">Gift Cards</p>
                <p className="text-xs font-bold pb-1">Apple Wallet</p>
                <p className="text-xs pb-1 text-gray-500">Wallet</p>
                <p className="text-xs pb-1 text-gray-500">Apple Card</p>
                <p className="text-xs pb-1 text-gray-500">Apple Pay</p>
                <p className="text-xs pb-1 text-gray-500">Apple Cash</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold pb-1">Account</p>
                <p className="text-xs pb-1 text-gray-500">
                  Manage Your Apple ID
                </p>
                <p className="text-xs pb-1 text-gray-500">
                  Apple Store Account
                </p>
                <p className="text-xs pb-5 text-gray-500">iCloud.com</p>
                <p className="text-xs font-bold pb-1">Entertainment</p>
                <p className="text-xs pb-1 text-gray-500">Apple One</p>
                <p className="text-xs pb-1 text-gray-500">Apple TV+</p>
                <p className="text-xs pb-1 text-gray-500">Apple Music</p>
                <p className="text-xs pb-1 text-gray-500">Apple Arcade</p>
                <p className="text-xs pb-1 text-gray-500">
                  Apple Fitness+
                </p>{" "}
                <p className="text-xs pb-1 text-gray-500">Apple News+</p>{" "}
                <p className="text-xs pb-1 text-gray-500">Apple Podcasts</p>{" "}
                <p className="text-xs pb-1 text-gray-500">Apple Books</p>{" "}
                <p className="text-xs pb-1 text-gray-500">App Store</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold pb-1">Apple Store</p>
                <p className="text-xs pb-1 text-gray-500">Find a Store</p>
                <p className="text-xs pb-1 text-gray-500">Genius Bar</p>
                <p className="text-xs pb-1 text-gray-500">Today at Apple</p>
                <p className="text-xs pb-1 text-gray-500">Group Reservations</p>
                <p className="text-xs pb-1 text-gray-500">Apple Camp</p>
                <p className="text-xs pb-1 text-gray-500">Apple Store App</p>
                <p className="text-xs pb-1 text-gray-500">
                  Certified Refurbished
                </p>
                <p className="text-xs pb-1 text-gray-500">Apple Trade In</p>
                <p className="text-xs pb-1 text-gray-500">Financing</p>
                <p className="text-xs pb-1 text-gray-500">
                  Carrier Deals at Apple
                </p>
                <p className="text-xs pb-1 text-gray-500">Order Status</p>
                <p className="text-xs pb-1 text-gray-500">Shopping Help</p>{" "}
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold pb-1">For Business</p>
                <p className="text-xs pb-1 text-gray-500">Apple and Business</p>
                <p className="text-xs pb-5 text-gray-500">Shop for Business</p>
                <p className="text-xs font-bold pb-1">For Education</p>
                <p className="text-xs pb-1 text-gray-500">
                  Apple and Education
                </p>
                <p className="text-xs pb-1 text-gray-500">Shop for K–12</p>
                <p className="text-xs pb-5 text-gray-500">Shop for College</p>
                <p className="text-xs font-bold pb-1">For Healthcare</p>
                <p className="text-xs pb-1 text-gray-500">
                  Apple in Healthcare
                </p>
                <p className="text-xs pb-1 text-gray-500">
                  Health on Apple Watch
                </p>
                <p className="text-xs pb-5 text-gray-500">
                  Health Records on iPhone
                </p>
                <p className="text-xs font-bold pb-1">For Government</p>
                <p className="text-xs pb-1 text-gray-500">
                  Shop for Government
                </p>
                <p className="text-xs pb-1 text-gray-500">
                  Shop for Veterans and Military
                </p>{" "}
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold pb-1">Apple Values</p>
                <p className="text-xs pb-1 text-gray-500">Accessibility</p>
                <p className="text-xs pb-1 text-gray-500">Education</p>
                <p className="text-xs pb-1 text-gray-500">Environment</p>
                <p className="text-xs pb-1 text-gray-500">
                  Inclusion and Diversity
                </p>
                <p className="text-xs pb-1 text-gray-500">Privacy</p>
                <p className="text-xs pb-1 text-gray-500">
                  Racial Equity and Justice
                </p>
                <p className="text-xs pb-5 text-gray-500">Supply Chain</p>
                <p className="text-xs font-bold pb-1">About Apple</p>
                <p className="text-xs pb-1 text-gray-500">Newsroom</p>
                <p className="text-xs pb-1 text-gray-500">Apple Leadership</p>
                <p className="text-xs pb-1 text-gray-500">
                  Career Opportunities
                </p>
                <p className="text-xs pb-1 text-gray-500">Investors</p>
                <p className="text-xs pb-1 text-gray-500">
                  Ethics & Compliance
                </p>
                <p className="text-xs pb-1 text-gray-500">Events</p>
                <p className="text-xs pb-1 text-gray-500">Contact Apple</p>{" "}
              </div>
            </div>
          </div>
          <p className="text-gray-500 mx-4.5 text-xs pt-2.5 pb-5 inline-block border-b-2 border-gray-300">
            More ways to shop:{" "}
            <Link
              href="#"
              className="text-blue-500 border-b-[1px] border-blue-500"
            >
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link
              href="#"
              className="text-blue-500 border-b-[1px] border-blue-500"
            >
              other retailer
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
          <div className="flex flex-row justify-between py-5 px-4.5">
            <div className="flex flex-row">
              <p className="text-xs text-gray-500 pr-5">
                Copyright © 2024 Apple Inc. All rights reserved.
              </p>
              <div className="flex">
                <p className="text-xs border-r-[1px] px-2.5 text-gray-700 border-gray-500 cursor-pointer">
                  Privacy Policy
                </p>
                <p className="text-xs border-r-[1px] px-2.5 text-gray-700 border-gray-500 cursor-pointer">
                  Terms of Use
                </p>
                <p className="text-xs border-r-[1px] px-2.5 text-gray-700 border-gray-500 cursor-pointer">
                  Sales and Refunds
                </p>
                <p className="text-xs border-r-[1px] px-2.5 text-gray-700 border-gray-500 cursor-pointer">
                  Legal
                </p>
                <p className="text-xs px-2.5 cursor-pointer text-gray-700">
                  Site Map
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-700">United States</p>
          </div>
        </div>
      </div>
    </>
  );
}
