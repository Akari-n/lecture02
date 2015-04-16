describe("sum: 二つの引数の間にある整数の総和を計算する関数", function(){
  context("二つの引数が整数のとき", function(){
    context("第1引数が第2引数より小さいとき", function(){
      it("二つの数値間にある整数の総和を返す", function(){
        sum(1, 10).should.equal(55);
        sum(5, 10).should.equal(45);
        sum(-10, 10).should.equal(0);
      });
    });
    context("第1引数が、第2引数より大きいとき", function(){
      it("その間にある数の総和を返す", function(){
        sum(10, 1).should.equal(55);
        sum(10, 5).should.equal(45);
        sum(10, -10).should.equal(0);
      });
    });
    context("第1引数が、第2引数が等しいとき", function(){
      it("第1引数の値を返す", function(){
        sum(10, 10).should.equal(10);
        sum(5, 5).should.equal(5);
        sum(-10, -10).should.equal(-10);
      });
    });    
  });

  context("引数の片方が実数のとき", function(){
    it("NaNを返す", function(){
      Number.isNaN(sum(3.14, 5)).should.equal(true);
      Number.isNaN(sum(3, 7.89)).should.equal(true);
      Number.isNaN(sum(3.14, 7.89)).should.equal(true);
    });
  });

  context("引数の片方が文字列のとき", function(){
    it("NaNを返す", function(){
      Number.isNaN(sum("0", 1)).should.equal(true);
      Number.isNaN(sum(1, "1")).should.equal(true);
      Number.isNaN(sum("hoge", "fuga")).should.equal(true);
    });
  });  

});

