import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@andytudhope/embedded-discover";
import style from "./App.css";

class App extends Component {
  componentDidMount() {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "total_snt_minted") {
        return new Inspector(this.totalSntMinted.current);
      }
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

  totalSntMinted = React.createRef();

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
          As committed readers will know from previous posts, we plan to rank
          DApps that appear in Discover, the DApp Store most easily accessible
          from Status, using a radically simple game.
        </p>
        <p>
          Whoever stakes the most SNT ranks the highest, with one twist. The
          more you stake on your DApp, the cheaper it becomes for the community
          to downvote it (and the less SNT you stand to earn back as a result of
          those votes).
        </p>
        <p>
          This means that we can make sure information which ranks highly
          literally provides us with the most value, but prevent (at least to
          some degree) unfair domination of the market by well-resourced actors.
          It also means we can entirely remove middlemen from the process of
          curating information online.
        </p>
        <h2>Looking Closer</h2>
        <p>
          People do not want to think about which links appear first in their
          searches. They do not want the mental overhead of holding hundreds of
          tokens related to different markets, which require on-chain
          transactions to vote with, or redeem, or otherwise render "valuable".
          As a user, I simply want to know that the content which appears first
          is
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
          Even further, because we know how much{" "}
          <a href="https://www.aspenreview.com/article/2017/jaron-lanier%3A-beware-of-siren-servers%21/">
            political power is generated for those who control
          </a>{" "}
          such 'relevance' and 'cost', it's also important that no-one owns such
          systems and that they exist solely to serve the networks of which they
          are a part.
        </p>
        <p>
          It's not "Don't be evil". It is "We cannot be evil. Here is the
          proof."
        </p>
        <h2>Economic Design</h2>
        <p>
          One other verifiable claim about people: more often than not they do
          not care enough to vote with their tokens. So, we cannot simply farm
          out curation to "the community" and claim we have achieved
          decentralisation because
        </p>
        <ul>
          <li>
            Digital "communities" are shifting and transient beasts with low
            barriers to entry/exit.
          </li>
          <li>
            Such "communities" have shown that they do not often reach quorum,
            even on "important" issues.
          </li>
          <li>
            Systems built around transient groups with high levels of apathy are
            bound to fail.
          </li>
        </ul>
        <p>
          The Discover curve sidesteps the problems above simply. Even if not
          one community member uses their SNT to affect the rankings, we can be
          sure that the DApps which rank highest are literally providing the
          most value to the community interested in those DApps (i.e. SNT
          holders). This is because, the more you stake to rank highly, the more
          SNT is locked out of circulation; decreasing supply and so having a
          positive effect for each individual SNT holder.
        </p>
        <p>
          However, SNT holders can affect the rankings should they so desire,
          and doing so becomes cheaper and has a larger effect the more
          resources are committed to a given DApp's rank.
        </p>
        <p>
          It's all the beauty of bonding curves without the unnecessary
          complexity. Even the maths is relatively straightforward.
        </p>
        <h2>Mathemagic!</h2>
        <p>
          The more SNT you stake, the more virtual "votes" can be created on
          your DApp, so the cheaper each vote becomes. Because there is a set
          amount of SNT that was minted (6 804 870 174), we can use this to
          calculate the (exponential) rate at which we create "votes" based on
          the SNT staked relative to the Total SNT Minted.
        </p>
        <p>
          By this self-recursive trick, we can make sure that moving a DApp down
          in the rankings by the same percentage becomes proportionally cheaper
          the more SNT is staked on that DApp.
        </p>
        <p>
          Each important variable can be expressed in terms of another, all of
          which are related to the Total SNT Minted, so we need only consider
          one, key parameter for the entire system, which we have chosen to call{" "}
          <code>ceiling</code>.
        </p>
        <p>
          The <code>ceiling</code> is the % of Total SNT Minted any one DApp can
          stake to rank. That is, there is a limit to how much SNT you can
          stake, defined in relation to the total SNT that can ever exist. The{" "}
          <code>ceiling</code> affects the shape of the curve the most,
          dictating both the total you can stake and the point at which
          diminishing returns become too punishing for rational actors (~1.2M
          SNT in below). Play with the ceiling toggle to see the effect choosing
          different ceiling has on the axes and curves.
        </p>
        <div ref={this.totalSntMinted} />
        <br />
        <div ref={this.percentCeiling} />
        <div ref={this.discoverCurve} className={style.chart} />
        <h2>No Middlemen</h2>
        <p>
          Equally important, there is no middleman in the above setup, and there
          are no fees that go to a set company or individual.
        </p>
        <ul>
          <li>
            100% of what you stake as a developer goes toward your DApp's
            ranking. This is locked in the Discover contract, so decreases the
            total in circulation, which is good for the whole community of token
            holders.
          </li>
          <li>
            You can withdraw this SNT at any time, though not all of it. You can
            only withdraw the total you stood to earn back from community votes
            which, for small stakes is nearly 100%, but decreases the more you
            stake. There are still no fees on this, just maths.
          </li>
          <li>
            100% of what you use to upvote as a user goes directly to that
            DApp's balance and is also locked in the contract.
          </li>
          <li>
            100% of what you use to downvote as a user goes directly back to the
            developer of the DApp.
          </li>
        </ul>
        <h2>SNT Utility</h2>
        <p>
          So, what's the point of demonstrating to you via means of an
          interactive blog series all of the cool new ways you can use SNT?
          Well, first and foremost, it is so that we ensure we live up to{" "}
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
          more concrete numbers which express the potential value of such
          utility in permissionless and decentralised networks incentivised with
          programmable money. In order to do that, we need to calculate
          something called the "Net Present Utility Value". There are two
          important things to know about this:
        </p>
        <ul>
          <li>
            It is based on some rather large assumptions, so please play with
            the sliders provided to use numbers you may think more realistic, or
            simply check our work.
          </li>
          <li>
            It is not to be taken as gospel! We are not saying that such
            valuations are exactly what will end up happening. Cryptoeconimic
            design and token models are in their infancy, and what we present
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
          Value of ~$60M USD over the next 10 years for Discover. It's worth
          noting that, if you change the userGrowthRate from the current 200%,
          to 300%, then it has a drastic effect on the NPUV, moving it up to
          867M USD. That's the power of compounding for you.
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
          increase of $0.017 per token. At 300% userGrowthRate, this jumps up to
          $0.25.
        </p>
        <p>
          You can also play with the DApp growth/churn rates to see the effect
          that has. Doubling the growth rate from 15% to 30% results in an NPUV
          of $178M and an increase in SNT Price of $0.05. Again, this is just an
          estimate, and Discover is only one part of a much larger token
          ecosystem, so do take it with a healthy pinch of salt.
        </p>
        <p>
          It's worth stressing this one more time: this utility value accrues to
          the network as a whole, it is not simply magicked into Status' coffers
          somehow. Come contribute to this adventure and some of the value we
          end up creating will no doubt accrue to you!
        </p>
        <h2>Conclusion</h2>
        <p>By having a clear goal in mind:</p>
        <p>
          <code>
            Design an economic system for curating information with no single
            point of failure where information which ranks highly is provably
            valuable to network stakeholders, while protecting against
            well-resourced actors
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
          mean. This means that GAFA will never solve "fake news", because it is
          impossible to draw a clear line between{" "}
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
