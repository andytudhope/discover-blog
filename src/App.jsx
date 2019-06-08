import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@andytudhope/embedded-discover";
import style from "./App.css";

class App extends Component {
  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof percent_ceiling") {
        return new Inspector(this.percentCeiling.current);
      }
      if (name === "viewof discover_curve") {
        return new Inspector(this.discoverCurve.current);
      }
      if (name === "numberDApps") {
        return new Inspector(this.numberDApps.current);
      }
      if (name === "mobileAndUseful") {
        return new Inspector(this.mobileAndUseful.current);
      }
      if (name === "viewof dappGrowthRate") {
        return new Inspector(this.dappGrowthRate.current);
      }
      if (name === "viewof percentageWithdrawn") {
        return new Inspector(this.percentageWithdrawn.current);
      }
      if (name === "dappsBar") {
        return new Inspector(this.dappsBar.current);
      }
      if (name === "viewof userGrowthRate") {
        return new Inspector(this.userGrowthRate.current);
      }
      if (name === "viewof userChurnRate") {
        return new Inspector(this.userChurnRate.current);
      }
      if (name === "dollarDemandPerYearChart") {
        return new Inspector(this.dollarDemandPerYearChart.current);
      }
      if (name === "currentUtilityValue") {
        return new Inspector(this.currentUtilityValue.current);
      }
      if (name === "estimate_effect_on_snt_price") {
        return new Inspector(this.estEffectOnSNT.current);
      }
      return null;
    });
  }

  percentCeiling = React.createRef();

  discoverCurve = React.createRef();

  numberDApps = React.createRef();

  mobileAndUseful = React.createRef();

  dappGrowthRate = React.createRef();

  percentageWithdrawn = React.createRef();

  dappsBar = React.createRef();

  userGrowthRate = React.createRef();

  userChurnRate = React.createRef();

  dollarDemandPerYearChart = React.createRef();

  currentUtilityValue = React.createRef();

  estEffectOnSNT = React.createRef();

  render() {
    return (
      <div className="App">
        <blockquote>
          “Manifest plainness,
          <br />
          Embrace simplicity,
          <br />
          Reduce selfishness,
          <br />
          Have few desires.” ― Lao Tzu
        </blockquote>
        <p>
          As part of a Token Economics series, we'd like to showcase{" "}
          <a href="https://dap.ps">Discover</a> as an example of some tentative
          token engineering. Discover is a part of the Status Network, and has
          one goal:
        </p>
        <p>
          <code>
            Design an economic system for curating information with no single
            point of failure and no owner, where information which ranks highly
            is provably valuable to network stakeholders, while protecting
            against the rich
          </code>
        </p>
        <p>
          Discover's design is simple. Whoever stakes the most tokens, ranks
          highest; with one twist. The more you stake, the cheaper it is for
          other token holders to downvote you. While the first use case is
          ranking DApps, this simple system can be applied to arbitrary
          information, from DApps, products and services; to stickers;
          extensions; social content and much more.
        </p>
        <p>
          This means that Discover can help ensure DApps which rank highly
          provide us with the most value, but prevent (at least to some degree)
          unfair domination of the market by the rich. It also means we can
          remove middlemen from the process of curating information online.
        </p>
        <h2>Looking Closer</h2>
        <p>
          People don't want to think about which links appear first in their
          searches. The mental overhead of holding hundreds of tokens related to
          different markets, which require on-chain transactions to vote with,
          or redeem, or otherwise render "valuable" is very high. As a user, I
          simply want to know that the content which appears first is
        </p>
        <ul>
          <li>Relevant to me, and</li>
          <li>Beneficial to the communities I care about. **</li>
        </ul>
        <p>This means that I also need to be able to see easily</p>
        <ul>
          <li>How that "relevance" was calculated</li>
          <li>
            How much it will cost me to effect information of which I
            approve/disapprove.
          </li>
        </ul>
        <p>
          Furthermore, because we know how much{" "}
          <a href="https://www.aspenreview.com/article/2017/jaron-lanier%3A-beware-of-siren-servers%21/">
            political power is generated for those who control
          </a>{" "}
          such 'relevance' and 'cost', it's important that no-one owns such
          systems and that they exist solely to serve the networks of which they
          are a part.
        </p>
        <p>
          It's not "Don't be evil". It is "We cannot be evil. Here is the
          proof."
        </p>
        <h2>Economic Design</h2>
        <p>
          It's important that the systems we use to create and describe the flow
          of explicit (i.e. economic) value do not have any single point of
          failure. This means that we cannot simply hand the job of curation to
          "the community" and claim that "decentralisation" will solve the rest.
          Our tentative token engineering is aimed at creating systems that
          achieve their core goal, even in the absence of community input (or
          "votes").
        </p>
        <p>
          Knowledge and information need both hierarchical and emergent,
          networked structures in order to be properly navigated, and thus be
          rendered valuable. Bill English explains this idea best in his part of{" "}
          <a href="https://youtu.be/fhEh3tEL1V4?t=4630">
            the Mother of All Demos
          </a>
          . A less technical way of saying this is that metaphors - i.e.
          patterns imprinted on what we call "information" must be modelled in
          as many ways as possible in order to mean (i.e. 'be valauble'), which
          has been at the conceptual heart of ranking stuff since at least{" "}
          <a href="https://nakamotoinstitute.org/the-playdough-protocols/">
            ancient Sumer
          </a>
          .
        </p>
        <p>
          Even if not a single community member uses their SNT to affect the
          rankings, we can be sure that the DApps which rank highest are
          literally providing the most value to people who hold SNT. This is
          because, the more you stake to rank highly, the more SNT is locked out
          of circulation; decreasing supply and so having a positive effect for
          each individual SNT holder.
        </p>
        <p>
          It's all the beauty of bonding curves without the unnecessary
          complexity. Even the maths is relatively straightforward.
        </p>
        <h2>Mathemagic!</h2>
        <p>
          The more SNT you stake, the more virtual "votes" can be created on
          your DApp, so the cheaper each vote becomes. Because there is a set
          amount of SNT that was minted (<code>6 804 870 174</code>), we can use
          this to calculate the (exponential) rate at which we create "votes"
          based on the SNT staked relative to the Total SNT Minted.
        </p>
        <p>
          By this self-recursive trick, we can make sure that moving a DApp down
          in the rankings by the same percentage becomes{" "}
          <strong>proportionally</strong> cheaper the more SNT is staked on that
          DApp.
        </p>
        <p>
          Each variable can be expressed in terms of another, all of which are
          related to the Total SNT Minted, so we need only consider one, key
          parameter for the entire system, which we have chosen to call{" "}
          <code>ceiling</code>.
        </p>
        <p>
          The <code>ceiling</code> is the % of Total SNT Minted any one DApp can
          stake to rank. That is, there is a limit to how much SNT you can
          stake, defined in relation to the Total SNT that can ever exist. The{" "}
          <code>ceiling</code> affects the shape of the curve the most,
          dictating both huw much you can stake and the point at which
          diminishing returns become too punishing for rational actors (~1.2M
          SNT in below). Play with the toggle to see the effect choosing
          different values has on the axes and curves.
        </p>
        <div ref={this.percentCeiling} />
        <div ref={this.discoverCurve} className={style.chart} />
        <h2>What is the Right Ceiling?</h2>
        <p>
          It's kinda impossible to answer this question right now with no good
          data, so instead we're asking{" "}
          <a href="https://get.status.im/chat/public/status">for your help</a>{" "}
          and will talk here about how we landed up at the ceiling we currently
          have.
        </p>
        <ol>
          <li>
            We ran some informal{" "}
            <a href="https://twitter.com/cryptowanderer/status/1113444025548320768">
              twitter
            </a>
            <a href="https://twitter.com/cryptowanderer/status/1113444553665724416">
              polls
            </a>{" "}
            and{" "}
            <a href="https://discuss.status.im/t/dapp-store-spot-survey/1131">
              discuss posts
            </a>{" "}
            to see what people might want to stake on a DApp they had made or
            had played a role in.
          </li>
          <li>
            Based on the results, it seemed like people aren't that willing to
            spend too much SNT to rank in Discover. There are many similar
            services, and Status doesn't have many users while still in alpha,
            so the value proposition is admittedly a little unclear.
          </li>
          <li>
            However, those same people said they would most likely expect those
            with more resources to spend as much as 100 000 to 500 000 SNT to
            rank in the long-term. So, we somehow need to account for both
            potentially big spenders, and those small startups/single developers
            who could/would not pay more than 1 000 SNT.
          </li>
        </ol>
        <p>
          The question is how to best do that? Right now, we're looking at 2
          meta-metrics for this:
        </p>
        <ol>
          <li>
            the{" "}
            <i>
              total staked after which it becomes increasingly cheaper to vote
            </i>
            , and so is not economically "rational" to spend: more expensive +
            decreasing returns/ability to withdraw means we can't expect many
            actors to stake much more than 1-1.2M SNT in the current setup. But,
            why that number rather than the ~500 000 SNT our polls indicated
            might be best?
          </li>
          <li>
            Well, we're also interested in{" "}
            <i>
              the point at which it becomes cheaper than 1 SNT to buy a vote
            </i>
            . Small startups and developers ought to be difficult to troll, and
            so making sure that we understand and think carefully about the
            exact point at which voting on a DApp becomes cheaper than staking
            to raise it's ranking. With the current ceiling (0.0292%), the cost
            to downvote a DApp with 10 000 SNT staked by 1% is 100.5 SNT (i.e.
            more than 1%) and 199.98 SNT when the stake is 20 000 SNT.
          </li>
          <li>
            Which means there's added protection for those who stake lower
            amounts (up to ~18 000 SNT), but plenty of room for people to stake
            more than our polls initially suggest. If you'd like to help us
            understand and model this better, please, join the conversation in{" "}
            <a href="https://get.status.im/chat/public/status">Status</a>.
          </li>
        </ol>
        <h2>No Middlemen</h2>
        <p>
          Equally important, there is no middleman in the above setup, and there
          are no fees that go to a set company or individual.
        </p>
        <ul>
          <li>
            100% of what you stake as a developer goes toward your DApp's
            ranking. This is locked in the Discover contract.
          </li>
          <li>
            You can withdraw this SNT at any time, though not all of it. You can
            only withdraw the total you stood to earn back from community votes
            which, for small stakes is nearly 100%, but decreases the more you
            stake. There are still no fees on this, just maths.
          </li>
          <li>
            100% of what you use to upvote as a user goes directly to that
            DApp's balance and is locked in the contract.
          </li>
          <li>
            100% of what you use to downvote as a user goes directly back to the
            developer of the DApp.
          </li>
        </ul>
        <h2>SNT Utility</h2>
        <p>
          What's the point of demonstrating to you via means of an interactive
          blog series how the Status Network fits together? First and foremost,
          it is so that we ensure we live up to{" "}
          <a href="https://status.im/about/">our principles</a> and deliver on
          the promises we made in our{" "}
          <a href="https://status.im/whitepaper.pdf">whitepaper</a>. There are
          now a slough a new ways to use SNT -{" "}
          <a href="https://vote.status.im">vote with it</a>,{" "}
          <a href="https://kudos.statusnet.eth">grant kudos</a> to people you
          work with,{" "}
          <a href="https://our.status.im/ethereum-name-service-now-available-in-status/">
            buy an ENS username
          </a>
          , pay{" "}
          <a href="https://our.status.im/swarm-progress-report-tribute-to-talk/">
            Tribute to Talk
          </a>{" "}
          fees,{" "}
          <a href="https://our.status.im/stickerheads-announcing-the-4th-community-design-competition/">
            buy stickers
          </a>
          , use it at your local{" "}
          <a href="https://github.com/status-im/status-teller-network">
            teller
          </a>{" "}
          and more.
        </p>
        <p>
          Not only are we keen to prove SNT utility to everyone, we also want
          more concrete numbers which express the potential utility value of
          permissionless and decentralised networks incentivised with
          programmable money. In order to do that, we need to calculate
          something called the "Net Present Utility Value". There are two
          important things to know about this:
        </p>
        <ul>
          <li>
            It is based on some large assumptions, so please play with the
            sliders provided to use numbers you may think more realistic.
          </li>
          <li>
            It is not to be taken as gospel! We are not saying that such
            valuations are exactly what will end up happening. Cryptoeconimic
            design and token models are in their infancy and what we present
            here constitutes early and tentative research, nothing more.
          </li>
        </ul>
        <h4>Calculate DApp Growth/Churn</h4>
        <div ref={this.numberDApps} />
        <div ref={this.mobileAndUseful} />
        <br />
        <p>
          This is taken directly from StateOfTheDApp's current total. However,
          only a small fraction of those meet the criteria to be displayed in
          Discover. Now, you need to decide how many of those mobile, useful
          DApps would be willing to spend SNT to rank in Discover year on year.
          Note the compounding effect on the y-axis as you change the growth
          rate in particular.
        </p>
        <div ref={this.dappGrowthRate} />
        <br />
        <div ref={this.percentageWithdrawn} />
        <br />
        <div ref={this.dappsBar} />
        <br />
        <h4>Calculate Aggregate Dollar Demand Per Year</h4>
        <p>
          The aggregate dollar demand has not only to do with the number of
          DApps staking SNT, but also the number of people using Discover, as
          this impacts the average spend for each DApp in our calculations. If
          you'd like to see the{" "}
          <a href="https://observablehq.com/@andytudhope/embedded-discover">
            full workbook
          </a>
          , you can, or just play with the most important user growth and churn
          rates here to see the overall effect of more DApps ranking in front of
          a growing user base.
        </p>
        <div ref={this.userGrowthRate} />
        <br />
        <div ref={this.userChurnRate} />
        <br />
        <div ref={this.dollarDemandPerYearChart} />
        <h4>Estimated Effect on SNT Price</h4>
        <div ref={this.currentUtilityValue} />
        <div ref={this.estEffectOnSNT} />
        <br />
        <p>
          In the current setup, we can estimate a rough Net Present Utility
          Value of ~$178M USD over the next 10 years for Discover. It's worth
          noting that, if you change the userGrowthRate from the current 200%,
          to 300%, then it has a drastic effect on the NPUV, moving it up to
          2.59B USD. That's the power of compounding for you.
        </p>
        <p>
          From this, we can see what small changes to the relevant inputs can do
          to the total utility value of services like Discover, ENS Usernames,
          Tribute to Talk, The Teller Network, and Sticker Market. It's anyone's
          guess as to what the real growth and churn rates will be, but you can
          be sure that we'll be updating these as and when more data becomes
          available. Play with all the inputs yourself to see if you come up
          with other legitimate numbers and then join the conversation in our
          dedicated Status channel.
        </p>
        <p>
          As you can see, the estimated effect of locking up all this SNT to
          rank DApps on the Price of SNT over the next 10 years is roughly an
          increase of $0.05 per token. At 300% userGrowthRate, this jumps up to
          $0.75.
        </p>
        <p>
          You can also play with the DApp growth/churn rates to see the effect
          that has. Doubling the growth rate from 30% to 60% results in an NPUV
          of $1.1B and an increase in SNT Price of $0.33. Again, this is just an
          estimate, and Discover is only one part of a much larger token
          ecosystem, so do take it with a healthy pinch of salt.
        </p>
        <p>
          It's worth stressing this one more time: this utility value accrues to
          the network as a whole, it is not just magicked into Status' coffers.
          Come contribute to this adventure and some of the value we end up
          creating will accrue to you!
        </p>
        <h2>Conclusion</h2>
        <p>By having a clear goal in mind:</p>
        <p>
          <code>
            Design an economic system for curating information with no single
            point of failure and no owner, where information which ranks highly
            is provably valuable to network stakeholders, while protecting
            against the rich
          </code>
        </p>
        <p>
          and working towards a simple, understandable and user-friendly
          interface, we have arrived at the first iteration of a system that can
          be used to assign economic value to arbitrary pieces of information
          without any central authority.
        </p>
        <p>
          Of course, curating information only by economic means is, in itself,
          narrow-minded and so we look forward to{" "}
          <a href="https://discuss.status.im/t/friend-to-friend-content-discovery-community-feeds/1212">
            further research and implementation
          </a>{" "}
          of other filter mechanisms in Discover that are not economic. It is
          vital to use as much data as is possible to gather on decentralised,
          public networks so that people can easily create their own,
          personalised views of information while remaining conscious of more
          global trends.
        </p>
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/dap-ps/discover">Github Repo</a> - look at
          Discover_Specification.md for descriptions of other attacks and more
          in-depth thinking. Please create issues and submit PRs for anything
          you think we might be missing!
        </p>
        <p>
          <a href="https://observablehq.com/@andytudhope/embedded-discover">
            Full Observable Notebook
          </a>{" "}
          - take a look through some of the finer modelling details, play with
          them yourself, or fork this workbook for your own project/work and
          benefit from the open source life we all lead at Status.
        </p>
        <h2>Notes</h2>
        <p>
          ** You may ask "why relevance and benefit to communities I care about
          as the only 2 metrics?" Isn't there some better way to measure the
          "truth-value" of content and display that? The short answer is: no.
        </p>
        <p>
          It has been known since time immemorial that it is impossible to state
          an objective truth in language. Without getting technical, we can
          blame interpretation: an act all language must undergo in order to
          mean. This means that{" "}
          <a href="https://aaronzlewis.com/blog/2019/05/29/you-can-handle-the-post-truth/">
            GAFA will never solve "fake news"
          </a>
          , because it is impossible to draw a clear line between{" "}
          <a href="https://www.youtube.com/watch?v=k1W5wAGzCpU">
            one human's fact and another's fiction
          </a>{" "}
          that doesn't leave someone fuming about the injustice of it all.
        </p>
        <p>
          If instead, we allow anyone free access to search for content they
          enjoy, based on the groups they associate with and their stated
          personal preferences (which are not revealed without explicit consent,
          and for due recompense), but nevertheless underpin the whole system
          with economic ranking which can only be interpreted very narrowly, and
          is not owned by anyone but benefits the network it serves as a whole,
          then perhaps we can better elimate insincere content...
        </p>
      </div>
    );
  }
}

export default hot(App);
