describe("three: 3の倍数の時だけ違うものを返す", function(){
  context("引数が数値のとき", function(){
    it("3の倍数のときは fizz を返す", function(){
      three(3).should.equal("fizz");
      three(9).should.equal("fizz");
    });
    it("そうでない場合は 引数の値をそのまま返す", function(){
      three(4).should.equal(4);
      three(5).should.equal(5);
    });
  });

  context("引数が文字列のとき", function(){
    it("引数の値をそのまま返す", function(){
      three("0").should.equal("0");
      three("1").should.equal("1");
    });
  });  

});

