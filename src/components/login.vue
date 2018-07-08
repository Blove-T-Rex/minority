<template>
	<div>
		
		<h1 class="title">
			<a href="/" class="active">少数派</a>
		</h1>
		<section>	
			<div class="login-form">

					<p class="join">
						<a href="#/join" class="pull-right light">+ 注册</a>
					</p>
					<p class="inputcontainer">
						<input type="tel" name="phone" placeholder="手机号码" autocomplete="off" class="el-input__inner" v-model="phone">
					</p>
					<p class="inputcontainer">
						<input type="password" name="password" placeholder="密码" class="text" v-model="password">
					</p>
					<a  class="btn form" @click="checkUser()">登录</a>
					<p class="footer">从即日起，少数派将默认使用手机号进行帐户注册。老用户仍然可以使用邮箱的方式登录，但根据网信办的规定，未绑定手机号的用户将无法进行评论和撰写文章。请登录后到<strong>帐号设置</strong>的<strong>实名验证</strong>页里进行绑定
					</p>
					<div class="warn" v-show="isShow">
						<span  @click="isShow=!isShow">×</span>	
						<p>
							请确保您的手机号码或者密码正确且不为空
						</p>
					</div>
			</div>
		</section>
	</div>
</template>

<script type="text/javascript">
	
	import axios from 'axios';
	
	export default{

		data(){
	
			return{

				phone:'',
				password:'',
				isShow:false
				
			}

		},
		methods:{

			checkUser(){

				if (this.phone.length == 11 && this.phone !== '' && this.password !== '') {

					axios.post('/userinfo/login',
						'phone=' + this.phone + '&password=' + this.password).then(res=>{

						// console.log(res.data)
						if (res.data.result == 0) {
							this.$router.push({path:'/tag'});
						}else{

							this.$router.push({path:'/login'});
							this.isShow = true;

						}

					})
					

				}else{

					this.phone = '';
					this.password = '';
					this.isShow = true;

				}

			}

		}


	}


</script>

<style type="text/css" scoped>
	
	.title{

		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAA6CAYAAADRG5lMAAAAAXNSR0IArs4c6QAAF45JREFUeAHtXQt4VEWWrrrdnScJJFGQPHgE0t0hAaIoIuoIOMigAzgq4KCuOqKO7OgqguPMqCD76YqsMtGVUdhV8AEiPhkFH+PIKiygoEJe3UlQJA+QRzDk3Y9b+5/buc3tTnf6kQ4k2PV9N1V16pxTdatOnTp1qm6HsVMYRF5ejFi8WDqFVUar6oU9wCPd5sN5eX2O19f/QjjFePA2CybMjPOBSCcxIQzt9TVxzusZE98hb2VCKuKS2GKsrt4LuGjHiUY/0x6IiFDuy87u62ixzZKZfCP6kYRRH05/ojFHGJf+Lun4mpwDB76ICmg4vdj7aboklNZ041mMNT4iGL9dCBEX0e7gvEJi4mFjTc0bUeGMaM/2eGZhCeX3Q4bE2WyOe7E0Pwhh7Nudb8kZ/1LSSwuNVVWfd2c9Ud49pwdCFkpLZuaNTBaPQxizTuVrQFtu1Ev8/uHV1ZWnst5oXae+B4IWSjFmjMFy8OBzTLDbT30zXTVCMH/SMWl2Tm3Vx6erDdF6u78HghLK6oyMtEaZvYnlekL3N6nzGtBgJ+fSvaba6v/qHDNa2lt7IKDP0Jo+xNwo2M6eIJDUyfAX6WQhP2tJz1ghJkwIa5ffWwfr59LuTjUlCaRg9u2wH/v1xA7BJugtaMyZ0d15Txyd8NvkV1Nih91PZvaNPVUg6ZWhva+1ZGQtCv/1o5Q9sQd8CiUdBbbZbK/jBCanJzZa2yYu5EfKMzOv0cKi6d7dAz6Xb0t65jIh5AW96NUamU4an1tdXdSL2hxtqp8e6CCUlvT06UKw9/zg91gw7Mp9uoT4vJzKyrYe28how4LqAY/lW8ycqQPV0qAoexgSbN9hckvLvB7WrGhzwugBD01pTc+cC3fLqjD4RI5EkphhyBAWazIpjyErk/30yqus9dtvA9fB+TF9Qnw2tOWJwMhRjJ7aA24/X1VmZnyTLBafyoYasrJYjCJ8RhZrNitCGDN8OJPiPO92EF7VrNmBmyZEmrOpZSEQHw6MHBmMMbm5A5sdjvdhPkjwoT5dVl7+Slc4jzKZhjqEeATa4quS8vIVxCsvJ2ep4Hw8+FeD/29V/iNycu7GtcCY0vLyp9rxfgu8B7BBFVJs7Izi4uIqFTdQPNZsTmuS5eXA26HWG4gmUPnIkSNTRGvrRJnzKeifl0us1m2BaKjcLZRNMrsH75IRDFGoOPoBA1iMmTQfCV67ABqNTEpMDIqV3NwcFB4hwU10H9xZzw3dv/9Q0ERdQGxzOMiHex76DvLBh3WBFVsMr8cba9fuBq8UCOBVo0aNWrN3794mCNo4wC6BoP6o8s8zma6TZbkQAsghtFklFRX3Am8o8AoIR9hsqYiCFspGp/Nr1DkI73BNgdm86VuLZT/xCTaMwTF0a2trjmy3j0GbzgOfix2trWNAj8teGBXGJufl5Y0qKSlpDMRTEUo617bWHrw/EHKgcl1qqkvbkQCS5jNSbGK6vl27SGSvqg5UtbY80Wa33w3AX7TA3pCGUMoQsFUYwAfQ3rOdra30Hk94tz3PaBwLgXwZcMX8kiXJSjgQSCVPaVmI53Nzchoo7R10jBUWV1R84AHn/CUwWAQeiW1O50qUXaEtR510I2wMZp4MOAduLNIJgKWi0v7NJ06kA+7eowCuJaeG1nOHwwzgLo8CHxlFKCsOHZoCFmf7KPcJIg0XOyLXJYAa7ac/C9crIxzo5Zq2bAmJqyyLG0D3EGarZ8+ExOX0ICfqdE82yvI8tL8PRn/BxSbTc8c1A0zmQovDsRGti1dayPnyMqv1b5Sm96X+ag/j1IR37JSkfwDmIZTcYHic2WwzQT0CZZNHmEy3llqtL6m0gE/GM4m0nju0pzUQdxGE8AA09za06R/xkrR5d1nZQXdhgIQilLJgdGM8qBB/4ViW9dprTEpICAo/VCT7oUPMZi1nbVYLHitr2bWb2SoqQmUzuDx90CUg+iJUQl/4+SbT+dBMq1GGk02+ETbcn3zhecPyzOZpQpYfIjiE5c2yiopl3jje+S8tlmNYmguB/xeImO6EJBm1ghAny40tnBcBNgADv3HWnDkLoGFdbHAxGrCd3jyVPDQahMfvYQiWVduo3Nzb7A4H2X205D6F5XYz4B3NIM73o55W4JH7DZ+1sDrwrkXf/ABVadELsXtPeXkN4EqgpV1NBxPr6fTGsnKVh6rujDB5xoyICKSzEf7uPn08qjp433xWv369ByzcjCzJU0EbEaF0CkFCmEdtkTgP2szpJ8SWOsZewAAPhMYowCC/g0GuJD6+ArTTDAxuOuo7Dvx3uE73hUOWx0I4hxI+ypJ/EuJmxO9CKOqFJH2xft26O0HXVmKxvJRvNFZgKV8jCeFkBsNqEjS1npFm82UOp3OLmvcV7y0r25FrNL6I9s7FpEjhdvtfgXe9FhftsmBS5mph2vQYo/GsVs5HYWLNBI/RKCtoaWjIz8/JubqDyaAl1KT1lStXjsbbpmhgnSZpJxxKcPz4I2srJ81XzmzlVkX7UTph3DiWufolD1bC7u5DD3hYGcEmhkXnRQRBGi7bbFe3g4uxg/zQC8VvdpvV2kC2GJbhNRigGCyPTwN5uj8C4CyFQJggcEqQHY7fUAJCqIZ42IrPUkaByfK1anr06NHrsVzOZrJM9TEd558i2kflwYZ8s3mC7HROVOtDXbOxw19eWlFxUvuSwCNgIsxCe69HW+MQJ0BY+yNOb6YvEbRLfHvl2IEvg0bfTHZzoPbonUy6FGZxIDx3ub9Ni7OujtFGRxuOPfMsO/JEBztdi9J9aSHOxy48DrtwWmbCDtjFkmZUDHhoyf8MlVGx1foKtAbZiBdisKdhSZ8CrfaRHz60HIYcIBCOxMREub41vFel5RXabKXT6bxFrRzC9hPSD8I99CX4q+CTMd4HwvcbVYDxfifLTqbIJVEBTb8LHMgsCCqgs/EJbAjhyJPLWMOmTaxu5Sp2cMEC9sP0GazcnMv2I/YOwunwBp3KvB6dPLwrFZ577rlno6tvVnhwXhOXlLQ2VH4YUNoS3wM6ZdRgY/7Vn401ZNiwsVJMTJJktw8E/g5Mgjsoj4FVdqzgdTwhObkf4FAkrIRL0iwq75uWlrx9+/aWUNum4k+bNs2Jxo1U86ivnMfE5EJDvkDtd8P9JIDzpdpGBYXzD3Q63cTk1NR+8KuawOcG8n0GoyWJnjY6JoVRkH+at25l9HgHXTfsvL3rCDVvx1IImuJQ6VT8tqamf0U6XskLUbh79267WhZKTNpmhNFIS/gteMytDQ1/AD05qj3C5s2b22bOnOko2bPnDWihcVg+xzG7vRVC3eySaGFra2tLRvqfIDSA19/0Ol0BBLLag1GIGRKWESNG3C7s9q9AqkPdA7Ch8qEefTDm/ChszAvhU02EXxKOAmGAZqwvtli2+MAOCkTL0uCgMHshEgz+QeE2+6KLLorH4JNQUjiBWf+CKxneX7hc/gRt0kDUELZFGMT+vjgV79nzDAaWNmnk46k1xMV9psWjUxq0a7UCwwkWBGEtBBmux66F0tLSb6B51YnSF26nZ0LhSE5+4O8gGti2E0Oh9calrX+SN/CMyQuRHO67nDh27Fb0jeJ4xWCt3Llz54lweRGd4loR4t/befR1tLUt8eaHzcPvUadyqQRLYpNBp5uGwe6gBfulpf0b1FgJ0UOALy3ds2dhe/qkJrfbE7X8MRH6qnkuyz6Nz/g+fRZhIuxXeDF2HXbMV6k0QcakwalRA0Hrd4ceiJeERpyxQimY5OlzCtQb7eVYzqBkxXzKQjjs+tjYwiBJO0XLLyh4GvbgWDwXGjinnbhHwLK1C/WRXxCbVT4HLpqvPRDaM2Q/wuabRcs68PaA7l0qAl+iVQLcSplqWok1qwZcTTUeZe0ZmCfN4HEXZcGbNjqx7UVBRegzl1ACG9pyEhFNnTo1FpPtRpgvO3JNJjqpChjIpsQ7nZkBnRTWsrZh3bprsEQOo17B4LzuS1uF02MbNmwgdwrZbT4Dduq78vPzxwqHYyx26BvdSEIomxgMtHszA81bCqf+ZVnZ2UVkixIuymugpRQy2HVZbnpX2WC1DG6jKm2ZNk0uL7ix7oSfc2OxL8e5FtkrjU3XDngryP5NgGYmQUzfX1l5O9DObkcdgDFZhonkaqQXvZqFQArFzlEBZ1TcbsOF+k7ouAUqDTowZDeQSusdjzQaszFQn+Tm5g72LlPzZDNCIN+ifH5u7mQ4s1dB2KqgwebPnjNHmShuXAixKpAE0wlhVcsQ0w7dHfBOE9ozAgLn14FPONiYrcSmZyGEc15BQUE/goFeUV6QJr8CRc56FKquH7pE8meQugSS8+/BZEUggaS69KiChDLyh9bE/bQHOeQJp+wiW1pK0Xll6NRKaK+9kXgNCOPlUJNvgGcqdzrfAM8LvfkC5ynA3C46uLTGYiCVscF6XoMbRFcDx5uM8jah080tKiuzwNlNG6EsPL+G4z+GBIUmA67Dna8Qcv41YHW+mKgw4JuBP5+kr625+RJEcxQzz6WFG1U8X7EkSZ/iSHZye5mMeBP6cgWOQz8K3iXEcWYp2FBfFfR+mFQb6ju07yJ/FyqdP3wIIR9hNi+Ef/Jx4KjmxE5f+MC9DXD3hsQDB9cKISQZHjBNRpJl2lj8AK36JgT5PqT7wgyYifg1/HrDXYC5sIVY70r4/4vJM1cthfZ9jdIwB8gVRTY22Zr+g8auhIA+DnPgYUKGQPqn8SqBSnZde/KCnxlZ0f3vJmJijmOkyLn9NWKPZRFaNxOnOZ/ChluKcpz8cRuW4dvh17vHVwej/O8KH/pJRE0AnOqgCw8eD+BNGjQliQFd54YJsYSOSTEh7iYY8B262NjX3eU+EqRdIXw3K0XQzrkFBR/SxAIxXU2jdfyYEvv5Q3Yx6vnOhSqu84PWKZjsBK0d0ilydxdKSckRqwIbFMGT48sjxtAPIyyFh3BqcQFuAI3BVa9XCY0GEfbYXEdLSxHSEwmG9lRjsCbBXvtvyvsKENabiA8E173JAc2m/unp/VFHhvaBhE+F8CiuHeA0QdiKiSf4fwUBeofSqDsbl25pB6/uogsD3UaHdr0ahGcRPeIXaXMGx/og8HK5mDgvVcr8/EFb6ARrjYtcmDEpJ/lB9QuWwGK739JuLJAbOpp7cSNHRq5GzovNuBAROYbBcYIwXoCB2IndJ13WVTYJGKQ3dXFxo4L5HIDsObemQpV6zv+wZcsWh7Z28h/C5bMVQpMGOG6y8elaDwHcTfcD7vJFtvuhlUlhMCzW8vGZFoJ2yxRkptf/DyV0Dkc+xRSwJAe0sWWdjoQSVoAyMRZRHEqQjKnJOzGNm0MhigQu3ZfErPRglTTt10xKjpS2FJ95MO/mDO4inoed8tsQxp3QKhco1eEIDlrvFpz9ziwqKjoeTBPQI4+Bnlx1SsCG42YsqamUgV0mQeD/iNHeCIGkM3HifwWE3e0fJLy9Vuv35PCntDtI0oPQ6p1uUmhDhLovJxoI8SdlZWU/UBqbrCkUU9DJ8jeulP+/RIeJ8gphgN8v0OZf+cfuWCJx7M6gLf+3Y1H3Qpx1x1nDBx94VKJLSmKpv7/TAxZuBoP1Sbi0wdLR8R5d5MWOeBMux+7GCNBVM4wnto6cr5IMBhOW0zXB8iM8aCISJvfqhUFdBN9fFRzQz2P3/Tl2tk8QGiopgUYcC/5biU4b8PGZCXQ3aGFo222BjiMh7LTRovYzONhXaeinK2nO92ov72rKOySh4ZdAMO1UAJv2GbJVOyD5AZBNiZ8Z1xjHfhC7A3z0qaeYcCpa3s0+Ze5cJqWkuPNhJTivyznnnI/Cog1ARNoK9w7H0xeGOKeuwv1D+r2lqSoZRnQjzrnHwP67I5DrRaXRxnStDXbleMAuw6B+SGVYzhMwsHeinospD3gdTnSuJI1IeW0YbTRmQLt+BCGkpd0dQDsRx5EvuAFeiQn4BTvUcyuB8Q6H4xITFbsW5sho0A4mOCa629alfGeB2gZ+TxMO4hz4PR/tDF9bpgglrj69DWCHnZwWsTvStsp9rH7DBg/WdBs9bZ5y/OsBDyWDTl3Pw7zRo60Hg8HxZd8QLMtX4iOshYjXrl+79jD8h9vggKNPWQcSPoSEdtXrDXr9GCzVM+hyg5ZPqOnRZrMRPOmyrdtnqeWBdqXi4vFeaOhH6TNWtYyWedyM+lgVIvDYCs07Ff2huHFgWtwGmv9Q8bXx4YMHr3K/Dy58qDei0IbZKh74vKemg4kTkpKWoHP2Ey7a9ECwmx7U4wqWjIzlQhb3qvlQY0N2Nhu29QsPsqPLl7Ojyzo/ENFnpLNh27YxzHw3rdzcwvbhZrrz6FE3LNgEXghuuZh8U+1+S7A0WjyctuTAuf1nwPLwjEBnunadWiQ1jeUMvf1qXJ8+q7/55psjKjjcmE5QUN88CALVrQ0teK91GOAklF+LAkWZtCOcQFyII74V0Ebvolx1yn+Nu5eTIFz14HsJBPJj4MUTDSbQfCz7yymtBky49/EuVyl5vd4Iu7CClnusBgcAT0f9+0CTA0FH89AxcPSjrvlIwjXKSViVpRq4Nozl77BK2AgPn2Fc5JTlz4GrR/trkyRpFH2HRGX+gvvluEh8DBXTC0Ys2CorA/Jy1NSy4y8rNrEbV0qIZ2l3K641NyzoBGcvhSuQVIfBYMBhgrgYnXgBHg+BROfTtzObYfjda5CkbCzRo+ljsEgIJNWN+uZ6CCQJPerSx8VlQAPfBpcRXeo1YXDJ3msjGoRk5OeJtrZLkVaEGW20YKL8igSSEMjuxKXbWYArO0ut9qNyWvJRuboZ2UICSfDSoqJfAp5OadTxIugVgVTyJ//Ary6uxkPf5NDXkDfExcUpwk8oRRYL2cePKOjg1SAH/gUWt1CaasuPYgp1rtYUzn7+2F0ThUph/7Bjz61gJ9551w+yJ/hYYSHz/sGBfv9yE5NC/F4cndaCXediT+6h5ehEB0veHEzQEjwb0UFP4rkVwpCHXW4aBONKfNJa6MueC62mjtgY0Lcw+EWo/zHYpecpQo+6tDt3aKBKslcT9PqhwFsGLu9jw3NBaWXlBrR3EvLbIcSTvScKLt2+j/K5KP8kKSXlCm3tCWlpddCeS9B/PyB2252YkbtQx4OAfxvL+WotDdpZgmeXj+f/kpKS1AmjkOCIcSl4vIfnQ/QlHbF2GtDOk+EQbg8fP3J0HyADTkKDTw189llmyMxkRx57DJ/G7gqeEJgpd9zB+j/8EO36FDrbgQPs+0mXMxHCr2PgU5InzbW1fwyp4iiyuweg6SA3PrWhG+dUJDyEkiqEbXkXbMsVp6LyDnXgx62wXLnAXj7MDrjeAOxIE/S64YMPHAjKH+hNHs33nB5ol4CTDTJVVz8PjRPcunuSLDIpLPuMhDFEgcTMwufO/MaoQEZmGE43lw5CSeo7NSXlJli2ylnq6W5gUPVz9iAm0+agcKNIPb4HOizfaovLBw3KdjqcX2H3larCemIMrf4a7Mgbe2Lbom0Krwc6aEqVjfHAge9wljULecWNoMJ7UowZtSs2JoZ2lNFwBvWAX6GkdzTV1Hwq6aTpGPyI+i8j0X8wMz5L1ElTuvoLGJFoS5RHZHugU6GkqshW0xn04yGY30e26q5w4ytNA8+ZklVdXdcVLlHantkDfm1K7+bS//YWrPFt3Kqnk4PTEtBYJ3xG95sPVheelgZEKz0lPRBQU6qtoBMfU0rKL/HT3vSJpIfHXsXp1pj+KT3XT40KZLf2co9gHrSm1La2bMiQIfhZu8fh+78eR2Nh8dDy6ywN5keww37UaDS+wL1uYHdGFy3rvT3QJYGyZGWdzxzyMvzM+oRIdwG0Ma75s+VSfPzS6L8giXTv9mx+XRJK9dVIOHFZ92Ywux42p+ujI7UwxBifzX0F//2aRM5fz6yp6fSKU4iso+i9pAciIpTqu9J/LCvfseM85hSXQ3vS/30xw/k+FOV6FUcbo3K4mrgFN02KcUPwM8T/NFdV1WpxoumfXw9EVCh9dZ/y71AOHz6bOZ1JTKdLwi9+2XETqCHB6ayPakJfPRaF/T/VHGD2FwUgaAAAAABJRU5ErkJggg==) 50% no-repeat;
			text-indent: -9999px;
			background-position: 0;
			background-size: contain;
			height: 38px;
			margin: 20px;
			text-align: center;

	}
	
	.title a{

		display: block;
		height: 100%;
	}
	.join{
		
		display: block;
		margin: 0px 0px 20px;
		line-height: 1.4rem;
		text-align: left;
		font-size: 16px;
		

	}
	.join::after {
    content: " ";
    clear: both;
    font-size: 0px;
    display: block;
    overflow: hidden;
	}
	.join a{
		
		color: rgb(74, 144, 226);
		float: right;
		outline: none;
		text-decoration: none;

	}
	section{
		
		padding: 0px 20px 50px;
		text-align: left;
		margin: 0px auto;
		display: block;

	}
	.el-input__inner,.text{

		padding: 16px 21px;
		user-select: text;
		cursor: auto;
		width: 100%;
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgb(41, 37, 37);
		border-image: initial;
		font-size: 14px;
		text-align: left;
		outline: none;
	}
	.inputcontainer{
		display: block;
		margin: 0px 0px 20px;
	}
	.btn,.form{

		background-color: rgb(41, 37, 37);
		box-sizing: border-box;
		padding-top: 20px;
		padding-bottom: 20px;
		width: 100%;
		border: 0;
		border-radius: 0px;
		line-height: 1.15rem;
		text-align: center;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: 0.875rem;
		display: block;

	}
	.footer{

		font-size: 0.75rem;
		color: rgb(155, 155, 155);
		margin: 20px 0px 0px;
		line-height: 1.4rem;
		display: block;
		text-align: center;
		margin-top: 5rem;
	}
	.warn{

		text-align: center;
		margin-top: 1rem;
		background-color: #f9f3c4;


	}
	.warn p{
	
		height: 2.5rem;
		line-height: 1rem;
		font-size: 12px;
		padding-top: 1.2rem;
		overflow: hidden;
		margin-left: 1rem;

	}
	.warn span{
		
	
		top: 8px;
		right: 3px;
		line-height: 0;
		display: block;
		width: 1rem;
		height: 1rem;
		float: right;
		line-height: 1rem;


	}
</style>