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
      if (name === "snt_staked") {
        return new Inspector(this.sntStaked.current);
      }
      if (name === "votes_minted") {
        return new Inspector(this.votesMinted.current);
      }
      if (name === "final_cost_snt") {
        return new Inspector(this.finalCostSnt.current);
      }
      if (name === "viewof discover_curve") {
        return new Inspector(this.discoverCurve.current);
      }
      return null;
    });
  }

  totalSntMinted = React.createRef();

  percentCeiling = React.createRef();

  sntStaked = React.createRef();

  votesMinted = React.createRef();

  finalCostSnt = React.createRef();

  discoverCurve = React.createRef();

  render() {
    return (
      <div className="App">
        <blockquote>
        “Manifest plainness,<br/>
        Embrace simplicity,<br/>
        Reduce selfishness,<br/>
        Have few desires.”
        ― Lao Tzu
        </blockquote>
        <p>
        As committed readers will know from previous posts, we plan to rank DApps that appear in Discover, 
        the DApp Store most easily accessible from Status, using a radically simple game.
        </p>
        <p>
        Whoever stakes the most SNT ranks the highest, with one twist. The more you stake on your DApp, 
        the cheaper it becomes for the community to downvote it (and the less SNT you stand to earn back 
        as a result of those votes).
        </p>
        <p>
        This means that we can make sure information which ranks highly literally provides us with the most value, 
        but prevent (at least to some degree) unfair domination of the market by well-resourced actors. 
        It also means we can entirely remove middlemen from the process of curating information online.
        </p>
        <p>
          Each of these use-cases make use of the SNT token, but in very
          different ways. This means each will have differing effects on the
          supply and demand of the token itself. It doesn’t stop there, as
          Status is an open and permissionless platform for developers to build
          on and use, which means that anyone can build SNT use-cases that
          affect the overall supply and demand. But how do we know what effect a
          utility has? Where do we go to try and evaluate its usefulness?
        </p>
        <p>
          To this end, we would like to start a blog series detailing some of
          the research we are doing within Status to objectively evaluate the
          value flows of SNT, the potential effects of our implemented (and upcoming)
          SNT use cases within Status, and how our potential user growth changes
          things. This work will encompass traditional economic and finance
          theory, work currently being done in crypto-economics, and novel
          methodology. That means a part of this endeavor is an attempt to get
          peer review and evaluation of what we do by you, the community!
        </p>
        <h2>Some Philosophy First</h2>
        <p>
          The point of cryptoeconomic design is not to create more "fair" systems. 
          It is to create systems with no single point of failure.
        </p>
        <p>
          This is a vital distinction many miss. "Fairness" is a great success metric 
          because there are so many divergent ways to measure it. However, <i>for precisely 
          the same reason</i>, it is a terrible design goal. Having a clear and easily-measurable 
          goal in mind is the holy grail of any mathematician, physicist, or computer scientist. 
          Once you can understand and articulate clearly what you want to achieve, implementation 
          becomes "fairly" trivial.
        </p>
        <p>
          This has always been true: Euclid"s <i>Elements</i>, the beginning of geometry, was 
          written in the attempt to prove that there can only ever be five Platonic solids. 
          Euclid was not trying to "explore geometric design space", or however a 
          pseudo-intellectual Ancient Greek might have put it. He had a clear goal in mind and 
          built towards it, charting the territory as he went not to show how clever he was, but 
          simply as a side-effect of moving closer to his final proof of the five possible 
          Platonic solids.
        </p>       
        <h2>Looking Closer</h2>
        <p>
          People do not want to think about which links appear first in their searches. They do 
          not want the mental overhead of holding hundreds of tokens related to different markets, 
          which require on-chain transactions to vote with, or redeem, or otherwise render 
          "valuable". As a user, I simply want to know that the content which appears first is
        </p>
        <ul>
            <li>Relevant to me, and</li>
            <li>Beneficial to the communities I care about. **</li>
        </ul>
        <p>
        This means that I also need to be able to see easily
        </p>
        <ul>
            <li>How that "relevance" was calculated</li>
            <li>How much it will cost me to effect information of which I approve/disapprove.</li>
        </ul>
        <h2>Economic Design</h2>
        <p>
          One other verifiable claim about people: more often than not they do not care enough 
          to vote with their tokens. So, we cannot simply farm out curation to "the community" 
          and claim we have achieved decentralisation because
        </p>
        <ul>
            <li>Digital "communities" are shifting and transient beasts with low barriers to entry/exit.</li>
            <li>Such "communities" have shown that they do not often reach quorum, even on "important" issues.</li>
            <li>Systems built around transient groups with high levels of apathy are bound to fail.</li>
        </ul>
        <p>
          The Discover curve sidesteps the problems above, and very simply. Even if not one community 
          member uses their SNT to affect the rankings, we can be sure that the DApps which rank 
          highest are literally providing the most value to the community interested in those DApps 
          (i.e. SNT holders). This is because, the more you stake to rank highly, the more SNT is 
          locked out of circulation; decreasing supply and so having a positive effect for each 
          individual SNT holder.
        </p>
        <p>
        However, SNT holders can affect the rankings should they so desire, and doing so becomes 
        cheaper and has a larger effect the more resources are committed to a given DApp"s rank.
        </p>
        <p>
          It"s all the beauty of bonding curves without the unnecessary complexity. 
          Even the maths is relatively straightforward.
        </p>
        <h2>Mathemagic!</h2>
        <p>
          The more SNT you stake, the more virtual "votes" can be created on your DApp, 
          so the cheaper each vote becomes. Because there is a set amount of SNT that was minted 
          (6 804 870 174), we can use this to calculate the (exponential) rate at which we create 
          "votes" based on the SNT staked relative to the Total SNT Minted.
        </p>
        <p>
          By this somewhat self-recursive trick, we can make sure that moving a DApp down in 
          the rankings by the same percentage becomes proportionally cheaper the more SNT is 
          staked on that DApp.
        </p>
        <div ref={this.totalSntMinted} />
        <br/>
        <div ref={this.percentCeiling} />
        <div ref={this.discoverCurve} className={style.chart} />
        <div ref={this.sntStaked} />
        <div ref={this.votesMinted} />
        <div ref={this.finalCostSnt} />
        <br/>
        <p>
          Because each important variable can be expressed in terms of another, all of which are 
          related to the Total SNT Minted, we need consider just one, key parameter for the 
          entire system, which we have chosen to call <code>ceiling</code>.
        </p>
        <p>
          The <code>ceiling</code> is the % of Total SNT Minted any one DApp can stake to rank. That is, 
          there is a limit to how much SNT you can stake, defined in relation to the total SNT 
          that can ever exist. The <code>ceiling</code> affects the shape of the curve the most, dictating 
          both the total you can stake and the point at which diminishing returns become too 
          punishing for rational actors (~1.2M SNT in the above).
        </p>
        <h2>No Middlemen</h2>
        <p>
          Equally important, there is no middleman in the above setup, and there are no fees that 
          go to a set company or individual.
        </p>
        <ul>
          <li>
            100% of what you stake as a developer goes toward your DApp"s ranking. This is locked 
            in the Discover contract, so decreases the total in circulation, which is good for the 
            whole community of token holders.
          </li>
          <li>
            You can withdraw this SNT at any time, though not all of it. You can only withdraw 
            the total you stood to earn back from community votes which, for small stakes is nearly 100%, 
            but decreases the more you stake. There are still no fees on this, just maths.
          </li>
          <li>
            100% of what you use to upvote as a user goes directly to that DApp"s balance 
            and is also locked in the contract.
          </li>
          <li>
            100% of what you use to downvote as a user goes directly back to the developer of the DApp.
          </li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          By having a clear goal in mind:
        </p>
        <p>
          <code>
            Design an economic system for curating information with no single point of failure 
            where information which ranks highly is provably valuable to network stakeholders, 
            while protecting against well-resourced actors
          </code>
        </p>
        <p>
          and working towards a simple, understandable and user-friendly interface, we have arrived 
          at the first iteration of a system that can be used to assign economic value to arbitrary 
          pieces of information without any central authority.
        </p>
        <p>
          Of course, curating information only by economic means is, in itself, narrow-minded 
          and so we look forward to <a href="https://discuss.status.im/t/friend-to-friend-content-discovery-community-feeds/1212"></a>further \
          research and implementation of other filter mechanisms in Discover that are not 
          economic. It is vital to use as much data as is possible to gather on decentralised, 
          public networks so that people can easily create their own, personalised views of 
          information while remaining conscious of more global trends.
        </p>
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/andytudhope/discover">Github Repo</a> - look at Discover_Specification.md 
          for descriptions of other attacks and more in-depth thinking. Please create issues and submit 
          PRs for anything you think we might be missing!
        </p>
        <h2>Notes</h2>
        <p>
          ** You may ask "why relevance and benefit to communities I care about as the only 2 
          metrics?" Isn"t there some better way to measure the "truth-value" of content and 
          display that? The short answer is: no.
        </p>
        <p>
          It has been known since time immemorial that it is impossible to state an objective 
          truth in language. Without getting technical, we can blame interpretation: an act all 
          language must undergo in order to mean. This means that GAFA will never solve 
          "fake news", because it is impossible to draw a clear line between <a href="https://www.youtube.com/watch?v=k1W5wAGzCpU">one human's fact 
          and another's fiction</a> that doesn"t leave someone fuming about the injustice of it all. 
        </p>
        <p>
          If instead, we allow anyone free access to search for content they enjoy, based on the 
          groups they associate with and their stated personal preferences (which are not revealed 
          without explicit consent, and for due recompense), but nevertheless underpin the whole 
          system with economic ranking which can only be interpreted very narrowly, and is not 
          owned by anyone but benefits the network it serves as a whole, then perhaps we can 
          better elimate insincere content...
        </p>
      </div>
    );
  }
}

export default hot(App);
