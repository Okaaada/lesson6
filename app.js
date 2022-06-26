$(function () {
  $('.start-button').click(function () {
    $(".result").fadeIn(2500);
    $(".start-button").hide();
    $(".restart-button").show();
    $('.money .stars').text(m_stars);
    $('.money .detail').text(m_detail);
    $('.work .stars').text(w_stars);
    $('.work .detail').text(w_detail);
    $('.health .stars').text(h_stars);
    $('.health .detail').text(h_detail);
  })
})
$(function () {
  $('.restart-button').click(function () {
    $(".result").hide();
    $(".restart-button").hide();
    $(".start-button").show();
  })
})

fortuneResults = {
  money: {
    stars: ["★★★", "★★", "★"],
    detail: ["最高の金運です！いつの間にかお金が溜まっているかも・・・？", "まずまず金運です！使いすぎには注意しましょう！", "悪い傾向が見られます！財布の紐は絞めておくと吉です！"],
  }
  work: {
    stars: ["★★★", "★★", "★"],
    detail: ["最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？", "まずまず仕事運です！普段通り仕事が進むでしょう！", "悪い傾向が見られます！自信過剰にならないように注意しましょう"],
  }
  health: {
    stars: ["★★★", "★★", "★"],
    detail: ["最高の健康運です！ランニングの距離を伸ばしても良いですね！", "まずまず健康運です！無理せず体を動かしましょう！", "悪い傾向が見られます！ケガにご注意を・・・"],
  }
}

for(let title in fortuneResults)


let m_num = Math.floor( Math.random() * 3 );
let m_stars = (money.stars[m_num])
let m_detail = (money.detail[m_num])
let w_num = Math.floor( Math.random() * 3 );
let w_stars = (work.stars[w_num])
let w_detail = (work.detail[w_num])
let h_num = Math.floor( Math.random() * 3 );
let h_stars = (health.stars[h_num])
let h_detail = (health.detail[h_num])