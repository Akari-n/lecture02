describe("add: 二つの引数の値を足す関数", function(){
  context("二つの引数が数値のとき", function(){
    it("二つの数値の和を返す", function(){
      add(0, 0).should.equal(0);
      add(1, 0).should.equal(1);
      add(1, -1).should.equal(0);
      add(1.0, 0).should.equal(1.0);
      add(1.0, -1.0).should.equal(0);
      add(1, 3.14159).should.equal(4.14159);
    });
  });

  context("引数の片方が文字列のとき", function(){
    it("NaNを返す", function(){
      Number.isNaN(add("0", 1)).should.equal(true);
      Number.isNaN(add(1, "1")).should.equal(true);
      Number.isNaN(add("hoge", "fuga")).should.equal(true);
    });
  });  

});

