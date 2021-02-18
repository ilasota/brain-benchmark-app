export default data = [
    {
        title: "Number Game",
        body: "Simple number memory test. The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques. ",
        imgUrl: require("../assets/numbers.png"),
        high: 0,
        average: 0,
        navi: "NumberGame",
    },
    {
        title: "Reaction Game",
        body: "Simple test that measures your reaction speed. Average reaction time for a person is around 250ms.\n\n" +
        "Don't worry if your time is above average because your score can be off by up to 70ms due to phone and screen lag.",
        imgUrl: require("../assets/speed.png"),
        high: 0 + " ms",
        average: 0 + " ms",
        navi: "ReactionGame",
    },
    {
        title: "Speed Game",
        body: "Test that measures your clicking speed. For a reliable results you should only use one finger.\n\n" + "" +
            "The average person clicks with speed of 8-10 clicks per second.",
        imgUrl: require("../assets/click.png"),
        high: 0 + " cps",
        average: 0 + " cps",
        navi: "SpeedGame",
    },
    {
        title: "Chimp Game",
        body: "This is a test of working memory, made famous by a study that found that chimpanzees consistently outperform humans on this task.\n" +
            "",
        imgUrl: require("../assets/chimp.png"),
        high: 0,
        average: 0,
        navi: "ChimpGame",
    }
]