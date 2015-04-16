describe("odd: 偶数を判定する関数", function(){
  context("引数が数値のとき", function(){
    it("偶数のときは true を返す", function(){
      odd(2).should.equal(true);
      odd(2000).should.equal(true);
    });
    it("奇数のときは false を返す", function(){
      odd(3).should.equal(false);
      odd(21).should.equal(false);
    });
  });

  context("引数が文字列のとき", function(){
    it("false 返す", function(){
      odd("0").should.equal(false);
      odd("1").should.equal(false);
    });
  });  

});

