var gateways = {
	data : {
		'ripplefox.com' : {
			name : 'ripplefox.com',
			website : 'https://ripplefox.com/anchor/',
			deposit_api : true,
			assets : { 
				'CNY' : {code : 'CNY', issuer : 'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX'},
			},
			logo : 'data:image/png;base64, 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',
		},
		'naobtc.com' : {
			name : 'naobtc.com',
			website : 'https://naobtc.com/',
			deposit_api : true,
			withdraw_info : 'Just input 1BTCAddressYouProvided*naobtc.com in the send page. You can just input the bitcoin address if naobtc.com is the default bitcoin service.',
			withdraw_info_cn : '在发送页面输入“1BTCAddressYouProvided*naobtc.com”即可。如果naobtc.com是默认的比特服务，只要输入比特地址即可。',
			assets : {
				'BTC' : {code : 'BTC', issuer : 'GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH'},
			},
			logo : 'data:image/png;base64, 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',
		},
		'tempo.eu.com' : {
			name : 'tempo.eu.com',
			website : 'https://tempo.eu.com/',
			assets : {
				'EURT' : {code : 'EURT', issuer : 'GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S'},
			},
			logo : 'data:image/png;base64, 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',
		},
		'coins.asia' : {
			name : 'coins.asia',
			website : 'https://coins.asia/',
			assets : {
				'PHP' : {code : 'PHP', issuer : 'GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP'},
			},
			logo : 'data:image/png;base64, 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',
		},
/*		'bitcoinfundi.com' : {
			name : 'bitcoinfundi.com',
			website : 'https://bitcoinfundi.com/',
			assets : [
					{
						code : 'USD',
						issuer : 'GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R',
					},
					{
						code : 'BTC',
						issuer : 'GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R',
					} ],
			logo : 'data:image/png;base64, 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',
		},
		'vcbear.net' : {
			name : 'vcbear.net',
			website : 'https://vcbear.net/',
			assets : [
					{
						code : 'JPY',
						issuer : 'GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM',
					},
					{
						code : 'XRP',
						issuer : 'GA7FCCMTTSUIC37PODEL6EOOSPDRILP6OQI5FWCWDDVDBLJV72W6RINZ',
					},
					{
						code : 'BTC',
						issuer : 'GDXTJEK4JZNSTNQAWA53RZNS2GIKTDRPEUWDXELFMKU52XNECNVDVXDI',
					} ],
			logo : 'data:image/png;base64, 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',
		},
		'readycash.com.ng' : {
			name : 'readycash.com.ng',
			website : 'https://readycash.com.ng/',
			assets : [ {
				code : 'NGN',
				issuer : 'GA3TKVAAVRPSOO7YAKCTFA2Z22PJMFT2YWNJLNMTIVLVLEPLE2SZIRXU',
			} ],
			logo : 'data:image/png;base64, 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',
		},
*/	},
	specialData : {
		'Stellar Network' : {
			name : 'Stellar Network',
			assets : { 
				'XLM' : {code : 'XLM', issuer : null},
			},
			logo : 'data:image/png;base64, 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',
		},
		'unknown' : {
			name : 'unknown',
			logo : 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAIBUExURf///344Ffr4+IE7Gfz7+3YrBnQoAnQnAJ5pT4RAH3csB9vIv3szD4E8GoA5F+bZ0385FnYqBYtLLHguCYI+HKJvVnQnAXctCP39/fDo5Y9RM3UpBKZ1XYA6GO/m46BrUqRxWZ9qULqVg9S9snw0EY9SNL+ci5JWOa+DbuXY0pBTNcmsnpxmTLiSf6h5Yp9rUfz8/IdEJPby8dfCuKV0XIpKKufa1f7+/vHq56BsU8SkldrGvX43FOLSy7aOe+3k4LGGcYVCIerf2vDp5qh4Yd7NxbuWhK6CbaJwV97MxPTu7L2ZiMGgkJtlSreQfXoxDZNXOufa1MiqnO7l4XUpA6d3YL6aicWllq2Ba9zJwffz8ujb1vr398Oiko5QMdG5rfv6+qx+aMCdjend2LuXhaVzW/n29XowDLGHcqRyWnkvC/Ps6pNYO/bx8IZDInguCta/tdvHvr+djHsyDrOJdZVbP/Lr6e/n5N3Lw+TW0IZEI/n29ppjSK2AasaomZhfQ9O7sIM/HppiR+HQybqUgvXw78qtn8Wml6FtVLKHc7yYhqd2X5JVOJ5oTptkSX02E7mSgKZ2Xujc15BUNodFJfv5+c+1qZRZPHw0EIhGJu7l4rKIdMywo8epm+vh3fHr6NW+s6l6Y+rg28uvormTgeTVz301EopKK9C2qpFVN5RaPc2k5EgAAAKESURBVGje7dj3UxpBFAfwBwc8QUBABaJAIIIkBBKIvSYaY+waW0zvvffee++a3vtfmd1DQo4w42WGN+PE/f6ws/tu9j5zt3twcwAiIiIiIiIiMzwn1tU5gnqTzVFZv4eION5Wir9j99RSGJ02VMRckXvjym7MiKkh58gxfl7DtjKfVuu7GJAV4/ZcI6vPOVHKT4022LlyPvc37GSkID3YypGzxLt5Ed9pl6ifmSqGuKiREoZoiI2aRoasJ0ZW8YVfQmu493LkFC2ykxu7SImNm7hh6aI0qvnOQtsaysfwqJ4bp6vpiDOHNfKPY+U+wuvwysT+g6Rrzokd7WuBHKkgftBlJF8g0woRmX45tLlnGbXRzHdXOTFi4UgVMXJA/kskRsIcuUyMNJXoj1zYIva/iIiISOo9KE8g/zmSPJ3cYl7BbLNmri41voVXFcWhEcnufbSY9SQHwFt8xXoho3Li1IixsKjYiPMnx814W1GcZTX4H/oN1qUAUVMcVmIC4Jneo5w4NaKfo4N5uCA5/px820oXx/A7G4/jcoAYfoSABVdAEw4qJ6q4XazR4kK5O4o96eNyMZF8MZJeAJTh+7h50NXOLqdVOVEdMtkNov1LxnHTT7kw4WJ3Dss7DV3RELRJGef4JwRHvn7TZiA/5AlP+Ic16UMsAm+cPkeHKsR5PysScX9KfndKFxM2N/9apHnK2uhAuA/eGUaH61UhwRYd1Nb9hbCm19mgKI7ha9a7zhceYv3D7FU/3MjWXg3SiwP3CkPZkJf9Rdf+LLIt3NFXLG9htvLP4wDd+KBGFdJ619TSrcuGwA30K4pDd7ylVg9/GNnK32TtYwyAKkRERERERGTG5xfV+1fLS6+G/gAAAABJRU5ErkJggg==',
		}
	},
	dataByIssuer : {},

	init : function() {
		console.log('Init the gateways.');
		for (var name in this.data) {
			var gateway = this.data[name];
			for (var code in gateway.assets) {
				var asset = gateway.assets[code];
				this.dataByIssuer[asset.issuer] = gateway;
			}
		}
	},
	getSourceByFederation : function(federation) {
		if (this.data.hasOwnProperty(federation)) {
			return this.data[federation];
		}
		return this.specialData.unknown;
	},
	getSourceById : function(accountId) {
		if (accountId === undefined || accountId === null || accountId==='') {
			return this.specialData['Stellar Network'];
		}

		// Will always return a source. If no source is found, it will return
		// the unknown source
		if (!this.dataByIssuer.hasOwnProperty(accountId)) {
			return this.specialData.unknown;
		}
		return this.dataByIssuer[accountId];
	},
	getAllSources : function() {
		return this.data;
	},
	changeTrust : function(code, issuer, flag) {
		var g = this.getSourceById(issuer);
		if (this.data[g.name].assets[code]) {
			this.data[g.name].assets[code].changing = flag;
		}
	}
};

gateways.init();
