import React from 'react'
import Timer from './Timer'
import './page.css'

const Page = () => {
  return (
    <>
      <main>
        <h1>HEAL BAY DIAGNOSTICS ONLINE RECEPTION</h1>
      </main>

      <section className='sec1'>
        <h2>What is the Online Reception?</h2>
        <p>
          The Online Reception is a Telegram-based support group where people can ask verified doctors health-related questions about scans, symptoms, or reports before committing to any procedures. <br />Think of it as a virtual hospital front desk that listens, educates, and guides_without pressure or panic.
        </p>
      </section>

      <section className='sec2'>
        <h2>Top Reasons to Join the Telegram Group</h2>
        <p>
          <b>Exclusive Discounts:&nbsp;&nbsp;</b>Members get exclusive discounts on any test, scan and x-ray_Telegram members only
        </p>
        <p>
          <b>Ask First, Scan Later:&nbsp;&nbsp;</b>Get expert opinions on whether you need a test or not, directly from real doctors. <br />So it is like your friendly online front desk and our doctors can guide you on what step to take next, but full consultations (like report reviews, prescriptions, or treatment plans) are paid and private. That way, you only pay when it’s truly needed.
        </p>
        <p>
          <b>Community Learning:&nbsp;&nbsp;</b>Learn quietly from others’ questions and answers. You're not alone.
        </p>
        <p>
          <b>Weekly Audio Podcasts:&nbsp;&nbsp;</b>Doctors break down common scan concerns in short, clear episodes you can listen to anytime.
        </p>
        <p>
          <b>Private Poll Power:&nbsp;&nbsp;</b>Vote anonymously on what scan-related topic worries you most. The winning topic gets discussed by a doctor in the next podcast episode.
        </p>
      </section>

      <section className='sec3'>
        <p>
          We’re providing a place where you can understand your body without fear, confusion, or long hospital waits.
        </p>
        <p>
          So in here, there is:<br />
          No transport cost<br />
          No hospital queue<br />
          No judgment<br />
          Just help. Fast.
        </p>
      </section>
      <Timer />
      <section className='sec4'>
        <h3>Your health shouldn't wait...Join the telegram group now!</h3>
        <a href="https://t.me/+4HjDLP9Kbq45OTE0">JOIN GROUP</a>
      </section>

    </>
  )
}

export default Page

