<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 items-center">
      <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
        {{ $static.metadata.siteName }}
      </h1>

      <p class="text-center">
        Using <a href="https://openai.com/">OpenAI's GTP-3 modell</a>, you can easily generate texts of various styles and even impersoate others. I used it to generate sonnets by feeding it with Shakespeare's works.
        You can read the AI-generated Shakespeare-like sonnets here, please enjoy!
        <br>The source code is available on <a href="https://github.com/lukaslangrock/shakespeare-ai">GitHub</a>. <g-link to="/about/">Learn More</g-link>.
      </p>

      <g-image
        class="block rounded shadow"
        alt="William Shakespeare Portrait from Wikipedia"
        src="~/assets/img/William_Shakespeare_1609.jpg"
      />
    </div>

    <h2>Davinci</h2>
    <p>
      This Engine by OpenAI is said to be the most promising. Upon generating some sonnets, I noticed that it already knew all of Shakespeare's works and just copied them almost without modification.
      <br>Some, like the first sonnet, were actually meaningfully changed. Others, however, were just carbon copies.
      This meant that I had to give Davinci some direction and gave it some new words and ideas as a parting point. This technique worked very well and resulted in some interesting sonnets.
    </p>

    <h3>Sonnet 1</h3>
    <p>
      "O! how much more doth beauty beauteous seem
      <br>By that sweet ornament which truth doth give.
      <br>A crow that’s trodden on will leave a stain;
      <br>A lily, hit with a storm, will have a bruise;
      <br>But thou, unhurt in thyself, though thou hast taken
      <br>Affliction’s stroke, and worn sorrow’s livery,
      <br>Thou hast nor crow’s foot, nor blot, nor stain,
      <br>To grace the subject of truth’s history.
      <br>Pity me then, thou who art so pure and white,
      <br>That thou thyself hast pity on my truth,
      <br>And not to tell the world how well thou art,
      <br>But how I am punish’d for loving thee."
    </p>

    <h3>Sonnet 2</h3>
    <p>
      "My will, not my power, doth possess my thoughts in you.
      <br>One touch of you, and I am a-fire;
      <br>Your beauty, my dear, is your only eye-sight;
      <br>Your brightness blinds me with a greater dazzling.
      <br>As the moon’s sphere doth act upon the sea:
      <br>Wherefore no marvel though I fain would dwell
      <br>In the admiring of your majesty,
      <br>That makes me to forget all business else.
      <br>"But since you are only woman and not goddess,
      <br>My fate will be an earthly misery;
      <br>And therefore do I pray to some power divine,
      <br>To give me leave to mourn a while in vain."
    </p>

    <h3>Sonnet 3</h3>
    <p>
      "A woman which is young, and fair,
      <br>In men’s eyes as goodly to appear;
      <br>As a fresh bud which on the top doth sit 
      <br>Of sweetest briar rose: or a bright jewel 
      <br>Set in the silver sea. The summer's day, 
      <br>That for his pride is only sovereign, 
      <br>To her is not so full of goodly heat: 
      <br>For oft the sun is to himself untrue;
      <br>And being clouded then she shows more bright.
      <br>Yet mark what foul trespass doth her blot, 
      <br>The weight which it bears makes still that spot."
    </p>

    <h3>Sonnet 4</h3>
    <p>
      "It is thy picture, and not thy company;
      <br>That now makes my heart burst out with rhyme:
      <br>For, if a friend thou hast that holds his peace,
      <br>In time of need to aid thee and thy rhyme;
      <br>If any such there be (as sure there is not),
      <br>Then neither white nor red can dye thy name.
      <br>Dost thou in conscience think that I could write
      <br>This glowing screed, and not omit thy name?
      <br>I will have fame with profit still conjoin’d;
      <br>Then farewell peace, till some more worthy come.
      <br>In vain I see the lily's virgin hue:
      <br>The breath of heaven cannot preserve it long.
      <br>How soon may I in thee, my heart's delight,
      <br>And all thy little beauties, lose delight!
      <br>Farewell the plumed troop and the big wars;
      <br>Welcome soft peace with its roses double."
    </p>

    <h3>Sonnet 5</h3>
    <p>
      "To me, fair friend, you never can be old,
      <br>For as you were when first your eye I ey’d,
      <br>Such seems your beauty still. Three winters cold
      <br>Have from the forests shook three summers’ pride;
      <br>Three beauteous springs to yellow autumn turn’d
      <br>In process of the seasons have I seen;
      <br>Three April perfumes in three hot Junes burn’d, 
      <br>Since first I saw you fresh, which yet are green.
      <br>To me you are as you were; unchangeable;
      <br>But, then, my judgment is perhaps too nice:
      <br>Since I have seen you change in mood and mind, 
      <br>And that two lovers to one another prove."
    </p>

    <h2>Curie</h2>
    <p>
      While being not as good as Davinci, Curie was also promising and actually a bit more intelligent for my use-case. It never gave me a refurbished Shakespeare work, always creating an entirely new one.
      <br>The downside was that these are, in my opinion, not as Shakespeare-ry as some of the good Davinci results and sometimes very short, but they also have a unique flair to them:
    </p>

    <h3>Sonnet 6</h3>
    <p>
      "This is a jewel! this mine eyes gaze on;
      <br>It cannot good come of, but evil look:
      <br>To have it so before me doth invite
      <br>Ill thoughts to work in me, ill turns aside.
      <br>For on the rims thereof thou hast device;
      <br>Such vanity I know not what to call.
      <br>The very thought of it my heart doth pain,
      <br>For all the sweet in it is sick and deadly.
      <br>What hath a woman to do with grisly death?
      <br>Why should she live when so fair a jewel can die?"
    </p>

    <h3>Sonnet 7</h3>
    <p>
      "When to the session of sweet silent thought
      <br>I summon up remembrance of things past,
      <br>I sigh the lack of many a thing I sought,
      <br>And with old woes new wail my dear time’s waste.
      <br>And then I counsel them that love is wise,
      <br>That love is prosperous and is every way;
      <br>That love is honour and is everywhere
      <br>And most in this, that love is always the same."
    </p>

    <h3>Sonnet 8</h3>
    <p>
      "I loved thee first, and thy dear love hath won me;
      <br>And I have owned it, although thou hadst not asked it:
      <br>I am a foolish prating fool to heaven,
      <br>That hides my blissful secrets from every eye:
      <br>My thoughts fly up and dwell with thee alone,
      <br>O my dear love, my dear love! Is not this joy?
      <br>My bonds are sweet; they tell me thou dost love:
      <br>I have no longer cause to say I lov’d thee.
      <br>Thou must be mine and I thine, for we were made for one another."
    </p>

    <h3>Sonnet 9</h3>
    <p>
      "O, never was a story of more woe
      <br>Than this of mine! O love, it was full strange:
      <br>The woes that I have since thee seen are none;
      <br>But all in love’s despite. In faith they were sore-seeming.
      <br>I fear thy beauty much when thou art by,
      <br>And much I fear thee when thou art from me.
      <br>For all the world is weary of my story;
      <br>Men think that it imports them nothing to hear it:
      <br>O that mine eye might hold a cup of wonder!
      <br>I should not then be desolate for ever."
    </p>

    <h3>Sonnet 10</h3>
    <p>
      "Let us not then be rash and of your love complain,
      <br>As though it were some light thing to contain:
      <br>Our love is great and would be greater still,
      <br>If that our great love could make it less.
      <br>Think not my heart so light, or his so light,
      <br>But that my love may be as great as his.
      <br>Is it so much, that I should mourn and pine,
      <br>Because my love is not among the living?
      <br>O no, it is the life that I should mourn,
      <br>And not love’s death, to have his love from me."
    </p>

    <h2>Shakespeare Itself</h2>
    <p>
      I was also curious what I would generate when I began the sonnet with “Shakespeare” and then let it complete the sonnet for me.
      <br>Well the result is this:
    </p>
    <p>
      "Shakespeare, thou hadst small Latin and less Greek,
      <br>Else "all the poets'' with one voice would swear
      <br>Thou hadst as much of either as should serve,
      <br>To schmear a glove. But master of your art,
      <br>That’s more than all the world beside can teach.
      <br>And is all "that you know?" Then, give me that;
      <br>A pox of your hard-won ‘art’! and if some be,
      <br>More gentle, call them Nature’s artists then!"
    </p>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Shakespeare-AI"
  }
};
</script>
