window.onload = function() {
	//	申明使用 ECS6的严格模式
	'use strict';

	//	$(".js-night-font").click(function() {
	//		$(".js-night-font").attr("color","#000");
	//	});

	var menu_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAoCAYAAABerrI1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNFN0E3M0IwMjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNFN0E3M0IxMjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0M1ODVCRkYyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0M1ODVDMDAyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5uTX6PAAAA0UlEQVR42uyXsQrCMBRFX4p0V39Pv8FJcekHFJe6d+v3NY6CDvUFooQ0AcEllnPhlgz3QU6bBq6ZnvdaRC7qndqoB/VR/ZC5wuxGytLtvXejUJ0uDlGgVZ8Tg6lsaWod1Jh461a9TQyMBX6hWLaSBary5zBWn8kPf8DUr/Rx8hfEPth4kxkIs+tCL4rG/VOLPH5AAQUUUEABBRRQv0O54nf1tcL6dZ3Jh9mpMH/2TkmkJFISKYmURKCAAgoooIACCihKIiWRkkhJpCR+XxJfAgwA/ROhOlYvoWQAAAAASUVORK5CYII=";

	var font_change_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAuCAYAAACViW+zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBCRTkzQUQ3Mjc4NzExRTU5RkYxQjg1Rjk2QkEyNzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCRTkzQUQ4Mjc4NzExRTU5RkYxQjg1Rjk2QkEyNzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0U3QTczQkEyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEJFOTNBRDYyNzg3MTFFNTlGRjFCODVGOTZCQTI3MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6/hjRDAAAFqklEQVR42uRaaWwVVRi9fTbYqoBoEGIVrDsBA6JRAY0VSkQUl7pQI8YQGjTRaNCgBtdoApho3aoRRJaIC25/VBTBCiqCuKX+QDFqFANRsRCtsRWr9XzxNBnu++6bO/fNe9i+k5y0c2fmzrwz3/22mbKuv9pNChgCLgLHgBvABnCr6Qkor1CHy1ISZjVYG9leC55V6sLsB/4ucynj7T1VmEwKU09VRBHUmx6MNIS5JuF4SQhzIniKY5+MjypVYa4OtKb/PfJxvn3B7eABOY4Rp3wo2FZKzndajCiG+68otaWkLaP23rKcQoWRDHekMj5DGZPjTisVYWYqY+vB5/g3qZPuFcIMYFJn4wnrr50EDujtwlwFVlpjreBL/P9lbkdRyfMKBcmn7gRfAbeAO8G/wS7yT3Ab+AHYBF4I7ptmuJbUfzN4vDXeCN4U2X4AvNE65gtwOG80rYc6ndcdFnD+DnAe+ChCdme+wpzJyjmKLgr1VWTsOAph11A14LoURBkKrgBPTWGu98CLIE5rPktJC73NliiG5vxOgUK3WN3GlEQRnAG+Zjo7+oQKMxCsU8YXOI7XnHAd5wnFQeAb4GBl37fgXeDp4CGS09Jiy+hPxMoud0RNSSduDV1Kt4DzrbEfecHdyvHyBKSLN8galxu4L1CYp5lxRyGO9WbwcbDT00/OtYVg2VKFJdWWxGIyjtxliUMUw/HFjhwoJBqOVMoLuca54COeonT7xDmMUHbtV5d0KU0Ej7TG/gEXxpy3kMdFIfPUBghzneLMJUS/HTCXiPOYMl6bVBgtc30T/C7mPNm/KgUnvA94iTX2Cy0lFO87rNJbmCpwiqdz9XXCUzivLyqZK21g4tadSObTU96q5FSHJxFmBj18FD8wOvhgJY/fowviKDhz9XXuBccy4kg/eWkKofo3a/tAX2HkBzQo44sSODs57illvEER3Ac7mdxtTEGY/UNrpXOi5hXzQ3NBE1LmnbyXasSTafHlocJoTvJVFmRJsI3n7a12xCD6tfnM0j8CJ4UWkUeA3yjinQ2+FXBzkxS/JKH8KI/o5oP+4LHgMWA177+a20O8ZymvKDMxa9yViK1Kue0xkwlXyLmy1M/jw6pO08RcFiPp/PeOmiRt5CorcvWEbgePDrzmbpYld7gsxiXMpeALRXSGl4Evei6XpWw0JcEf7CN9Bn4Ivs4H0pVUmDXghCIK0+xxvT70UeMd+yXx+5RhfDOrbXH68u5rV47SwFsYcWBfFrDJVKP0arRmlw2tKyj4GnwYfJY5TtKaSRUm4wihtigi1LspWcc6zme3AnKFbnGs1yo/ai4bV00BogyM8+xRVBi9ab3ApNer7XI0t7Qmezemm+zm9f3gbQmddhQnJBFGKtiDrTFZa8tS9inLlAJQrnux4/gJSu10T573MD6JMFqmuyKH8wrFLkfUc7Ujhlvbn1Cc4DTF6O/GVGFGgOMczaZCQFtO4xQTzzBM21acD+rjcqBMzNNqYQ+kEJB5P/eon6RssD8jGWb0z9t8cBj4oE9aLZDPNaZ5PtU0oTWxtM9LWqxtyZTPD7ievO9abbIb9JHeQUcmKsxUxVxlDS8vsDDLFV/R32R/2LhSOfdJ4/8VhfRdZoEfmz3fomoRbXBUGG0ZPWMK/yVUGxOzuOW0mGm9nYes531eQCvqXl7lrNrr2QuSNmajZYm/gjco1x7RnfkOdZT9o1lbFBqjGWW0pC56X9czw42DtCv7xvig7VyKP5vsL9gfQvY7Syymw2S/4thUJFEM65tNisO1I4+8EZjnkWj2ixFFLHQUH4b0ordY+6+En+knwvzElDoaCmeb4mK2JUQT78vGHPZeWhLOL3M/D55k/ntptyOy724l0WyMFpE1jO3NrEyLDVk6E1lIrvU4fgxFGkv/UsWSQnxHK5dhC/3QGqe/dHy1+a8AAwCKR08FSRIHxQAAAABJRU5ErkJggg==";

	var font_click_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA0CAYAAAAg5t6HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNFN0E3M0I4Mjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNFN0E3M0I5Mjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0U3QTczQjYyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U3QTczQjcyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7nhaYNAAANmElEQVR42uxbC1RV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";

	var day_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNFN0E3M0I0Mjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNFN0E3M0I1Mjc4NDExRTU5RkYxQjg1Rjk2QkEyNzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0U3QTczQjIyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U3QTczQjMyNzg0MTFFNTlGRjFCODVGOTZCQTI3MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6o6V5PAAADu0lEQVR42uyaTUgVURTHm/cigiS1LEitoHoqbgtcZAStngtDoYxa9rFsYYuWfUBhuSjCneiylkH2oavoEZlC4aYsM9toakWLnpsWyfQfOMJrOvdjZs6bedQc+OF7d9499/y9M/fj3HFc110Xo3WAYfp8BozG0agTs8hFsIM+L4H6f1GkvzEnjkYz6/4DS0WmIlORSlsq+bxcKSI3gkHwBlwSGA3PkrjPNE+GnhXAZYprkOLUjOmYQjT0un/aMHAMdcqNQ3GUWq+ujqknt/i+nwZDcc1vih4cojh0cQbqyQaw4P5tSfQo14OezYNGXV0b5zly5Le+mEX2KQTmTHVtl3U58BQ0lpQtgJ2Gei2gE7SDVrANVIMf4Bt4B56Dh+C9wdc80/4RMGteTNr/J/09+lhzW3WBCTeYTVA91WPwKGgPBrldS9kFBkA/qGOuN4FnbjTz6jczvuuoXa/93UHilnxmjoMVV8ZWyJ9IbFICz4FVV9ZWyW9FiDwGfmmCnQIXQBuoBxvobxuVT2nqen57khbpPYNFRYBzoNtiPnXod3MKP0VqJxGRjmaQGQXVAf1VUz3VYOQkIbJLEdADkA3pM0v1OetKQuQ4E8gHUBXxEfDqzzC+x+MW2aL4b+eFRuu8wn9LGH9hN82dTNlrMCa02xgjf347GmdmoJ0puyu8rbrHlB2MU2QrUzYuLLJg2a6VyA7KbLsMi3Tdb9sVuwRJ+2TZrjF+b+4pTd2rkk/1hky4Z+vBapkz7lzW3Ri/ze3KpTqKTNlmYYG1TNlKmJRJpiSDxpkqq/aVKdsrLHIPU/ZFkwFUxu/dYk8M3c3ZNNjnKzsEXgmKPKxo12/G+MOOri+YslPCPXnSst2yTSEjTNkBkBcSmCd/Nu1aDF/hl15cDmdGYO26SXrtGuUs5AZT1kQrn2xIn1la6TQx1/rDT0TR9pMFxUL6fogeraJ6nBWS2k+uZQZUyauPtOO38dNNv1cltZqTzvH0WOZ49oMaqlND321yPCfSbF2ad5UXufaMFiIKLER9BqOK9Ea4m2CZEk61mrOQyYDiJjUpzFpqb5nad8olkjsfvG6RC7oIRsBsSY62SN9H6Lopd3MtyvmorcCM4gD0dkxnk7eiHARHEWg84RWkUXPinZEQeSXsCa8wOYXQqxIi31aAQN3R/rTEAv1lqCNs3taSTqoEmclmqf2FIFlCm3cGvBeBzoOt4I7vraqgJvW+awPF9B0MgJ9RRZYz+5a+75qKTEWmIstuFfm+q7RJve8ayH4LMACaxEJEaXs23AAAAABJRU5ErkJggg==";
	
	var night_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2OUYzRUEwMjc4NzExRTU5RkYxQjg1Rjk2QkEyNzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMzA2RjA2Mjc4QTExRTU5RkYxQjg1Rjk2QkEyNzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTY5RjNFOUUyNzg3MTFFNTlGRjFCODVGOTZCQTI3MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTY5RjNFOUYyNzg3MTFFNTlGRjFCODVGOTZCQTI3MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v5YACAAAC/UlEQVR42tSaXYhNURTH97kzRnJ9ZTQzPh7IMEr5yshHEwkRkSeSjweEiMjDePTkhcKLPCApUV54GxTKcDM0JfL9QE0UGdcdEmb7L3edOq5zzz1nn332Pvdfv5e5Z9Zd666711577etIKYUGjQILwRwwDOwDfcKAamP873CwBawDrcABP8ACU87/FWUgIk3gKMjL/7VfwV4sojxcCw6AL9JfD0DGdABhv0KTwAUwO+CZvaBfGFaYAJaDyyAb8Mwt0CksKFPh9W3gWgXnSSeFJTkBZXQrOM3VJUi9oJErUGoysBKcCuE86YYt58sF0MILtiakjTvCojI+i/o876Zh9ThNARysUCr99NpmAN5FTAvxBRgS0QZlK5+GDLQrOC9sOu/NADVm70LU+9RmYJOi8yLigk8sgPUxbEy0HUATH0RUNdV2AG0hd9xyarMdwNyYNhaDOpsBTI5pYwRYYTMAHYtwh80ARmqws1ShBdEWwGAdGyI4HrMYKAegawFSMdhlo5XIK/ZAfvoO5oFukxn4oNHeID5DjzUZwCvNNsn5DjDOVADPErA7BdwF0xP2v4YCyCVknDJwjxe2k8AHT4O0VTSeawD9Mll1glZN48T5IMc+N7p/7JJm1AFWg4ERna4Da8F1j62cdzZKY5RZBtbcEuYzuAlugyfgOSjwyS7LJ8QJYJoojuuX+RycLnqPlPXgLZfBalCB11iveyL7CM6K6tEZURxp/jNWGc2pzFbBp98M3peOVXrA4Sr49I+4zpdmgDSA94UZKXX+ITeNP8sFIDg9XWBoypyni0O6THzqN1bx6iXYCH6nyHnyZXOp8+UCIF0Fe1LiPH1FdoMr/q8G74DbwS9pT/TeO+Nes64JuFpNUl+5fdByT9wMHhl0vhu06L7opobqEPiWoON9oJ0v1bXf1LuMAcdAQbPjJ6g9juqPE+PXKvVcbjeAmQqHFsmb5iVwzu1tVKYSOkpdA1jEU246To4XxZ/gZLlUU5v8CbzhI+x9bqV74r7xHwEGAPDRVwnecW5KAAAAAElFTkSuQmCC";

	var Dom = {
		top_nav: $("#top-nav"),
		js_nav_pannel: $(".js-nav-pannel"),
		js_menu: $(".js-menu"),
		js_menu_img: $(".js-menu-img"),
		js_font: $(".js-font"),
		js_font_change: $(".js-font-change"),
		js_day_night: $(".js-day-night"),
		js_night_img: $(".js-night-img"),
		js_night_font: $(".js-night-font"),
		night: $("#night"),
		day: $("#day"),
		font: $("#font-change"),
		fontclick: $("#font-click"),
		action_mid: $("#action_mid"),
		foot_nav: $("#foot-nav"),
		js_bk_container_color_1: $(".js-bk-container-color-1"),
		js_bk_container_color_2: $(".js-bk-container-color-2"),
		js_bk_container_color_3: $(".js-bk-container-color-3"),
		js_bk_container_color_4: $(".js-bk-container-color-4")
	}

	var Win = $(window);
	var Doc = $(document);
	var readerModel;
	var readUI;

	var RootContainer = $("#fiction_container");
	var initFontSize = Util().StorageGetter("font_size");
	initFontSize = parseInt(initFontSize);
	if (!initFontSize) {
		initFontSize = 14;
	}
	RootContainer.css("font-size", initFontSize);

	var init_reader_bg_color = Util().StorageGetter("reader_bg_color");
	$("body").css("background-color", init_reader_bg_color);

	//	封装本地存储功能
	function Util() {
		var prefix = "html5_reader_";
		var StorageGetter = function(key) {
			return localStorage.getItem(prefix + key);
		}
		var StorageSetter = function(key, val) {
			return localStorage.setItem(prefix + key, val);
		}
		var getBSONP = function(url, callback) {
			$.jsonp({
				url: url,
				cache: true,
				callback: "duokan_fiction_chapter",
				success: function(result) {
					var data = $.base64.decode(result);
					var json = decodeURIComponent(escape(data));
					callback(json);
				}
			});
		}
		return {
			getBSONP: getBSONP,
			StorageGetter: StorageGetter,
			StorageSetter: StorageSetter
		}
	}

	function main() {
		//      todo 整个项目的入口函数
		readerModel = ReaderModel();
		readUI = ReaderBaseFrame(RootContainer);
		readerModel.init(function(data) {
			readUI(data);
		});
		EventHanlder();
		ReaderBaseFrame();
	}

	function ReaderModel() {
		//		todo 实现和阅读器数据交互的方法
		var Chapter_id;
		var ChapterTotol;
		var init = function(UIcallback) {
			getFictionInfo(function() {
				getCurChapterContent(Chapter_id, function(data) {
					//					todo
					UIcallback && UIcallback(data);
				});
			});
		}
		var getFictionInfo = function(callback) {
			$.get("data/chapter.json", function(data) {
				//				获得章节信息的回调
				//				debugger;
				Chapter_id = Util().StorageGetter("last_Chapter_id");
				if (!Chapter_id) {
					Chapter_id = data.chapters[0].chapter_id;
				}
				ChapterTotol = data.chapters.length;
				callback && callback();
			}, "json");

		}
		var getCurChapterContent = function(chapter_id, callback) {
			$.get("data/data" + chapter_id + ".json", function(data) {
				if (data.result == 0) {
					var url = data.jsonp;
					Util().getBSONP(url, function(data) {
						callback && callback(data);
					});
				}
			}, "json");
		}
		//翻页功能
		var prevChapter = function(UIcallback) {
			Chapter_id = parseInt(Chapter_id, 10);
			if (Chapter_id == 0) {
				return;
			}
			Chapter_id -= 1;
			Util().StorageSetter("last_Chapter_id", Chapter_id);
			getCurChapterContent(Chapter_id, function(data) {
				UIcallback && UIcallback(data);
			});
		}
		var nextChapter = function(UIcllback) {
			Chapter_id = parseInt(Chapter_id, 10);
			if (Chapter_id == ChapterTotol) {
				return;
			}
			Chapter_id += 1;
			Util().StorageSetter("last_Chapter_id", Chapter_id);
			getCurChapterContent(Chapter_id, function(data) {
				UIcllback && UIcllback(data);
			});
		}
		return {
			init: init,
			prevChapter: prevChapter,
			nextChapter: nextChapter
		}

	}

	function ReaderBaseFrame(container) {
		//		todo 渲染基本的 UI 结构
		Dom.js_menu_img.find("img").attr("src", menu_img);
		Dom.js_font_change.find("img").attr("src", font_change_img);
		Dom.js_day_night.find("img").attr("src", night_img);
		Dom.js_nav_pannel.css("display", "none");
		Dom.js_bk_container_color_1.css("background", "#FFCCCC");
		Dom.js_bk_container_color_2.css("background", "#003366");
		Dom.js_bk_container_color_3.css("background", "#e9dfc7");
		Dom.js_bk_container_color_4.css("background", "#333399");

		function parseChapterData(jsonData) {
			var jsonObj = JSON.parse(jsonData);
			var html = "<h4>" + jsonObj.t + "</h4>";
			for (var i = 0; i < jsonObj.p.length; i++) {
				html += "<p>" + jsonObj.p[i] + "</p>";
			}
			return html;
		}
		return function(data) {
			container.html(parseChapterData(data));
		}

	}

	function EventHanlder() {
		//		alert("test");
		//		todo 交互的事件绑定

		//		底部菜单切换
		//		字体选项切换
		Dom.js_font.click(function() {
			if (Dom.js_font_change.find("img").attr("src") == font_click_img || Dom.js_nav_pannel.css("display") == "block") {
				Dom.js_font_change.find("img").attr("src", font_change_img);
				Dom.js_nav_pannel.css("display", "none");
			} else {
				Dom.js_font_change.find("img").attr("src", font_click_img);
				Dom.js_nav_pannel.css("display", "block");
			}
		});
		//		白天-夜间切换
		Dom.js_day_night.click(function() {
			if (Dom.js_night_img.find("img").attr("src") == night_img) {
				Dom.js_night_img.find("img").attr("src", day_img);
				Dom.js_night_font.text("白天");
				$("body").css("background-color", "#333333");
			} else {
				Dom.js_night_img.find("img").attr("src", night_img);
				Dom.js_night_font.text("夜间");
				$("body").css("background-color", Util().StorageGetter("reader_bg_color"));
			}
		});

		//		修改字体大小
		$("#large-font").click(function() {
			if (initFontSize > 20) {
				return;
			}
			initFontSize += 1;
			RootContainer.css("font-size", initFontSize);
			Util().StorageSetter("font_size", initFontSize);

		});
		$("#small-font").click(function() {
			if (initFontSize < 10) {
				return;
			}
			initFontSize -= 1;
			RootContainer.css("font-size", initFontSize);
			Util().StorageSetter("font_size", initFontSize);
		});

		//		修改背景颜色
		Dom.js_bk_container_color_1.click(function() {
			init_reader_bg_color = "#FFCCCC";
			$("body").css("background-color", init_reader_bg_color);
			Util().StorageSetter("reader_bg_color", init_reader_bg_color);

		});
		Dom.js_bk_container_color_2.click(function() {
			init_reader_bg_color = "#003366";
			$("body").css("background-color", init_reader_bg_color);
			Util().StorageSetter("reader_bg_color", init_reader_bg_color);
		});
		Dom.js_bk_container_color_3.click(function() {
			init_reader_bg_color = "#e9dfc7";
			$("body").css("background-color", init_reader_bg_color);
			Util().StorageSetter("reader_bg_color", init_reader_bg_color);
		});
		Dom.js_bk_container_color_4.click(function() {
			init_reader_bg_color = "#333399";
			$("body").css("background-color", init_reader_bg_color);
			Util().StorageSetter("reader_bg_color", init_reader_bg_color);
		});

		//		点击唤醒菜单功能
		Dom.action_mid.click(function() {
			if (Dom.top_nav.css("display") == "none") {
				Dom.top_nav.css("display", "block");
				Dom.foot_nav.css("display", "block");
			} else {
				Dom.top_nav.css("display", "none");
				Dom.foot_nav.css("display", "none");
				Dom.js_nav_pannel.css("display", "none");
				Dom.js_font_change.find("img").attr("src", font_change_img);
			}
		});

		//		滚动隐藏菜单功能
		Win.scroll(function() {
			Dom.top_nav.css("display", "none");
			Dom.foot_nav.css("display", "none");
			Dom.js_nav_pannel.css("display", "none");
			Dom.js_font_change.find("img").attr("src", font_change_img);
		});

		$("#prev_button").click(function() {
			//			获得章节数据>渲染数据
			readerModel.prevChapter(function(data) {
				readUI(data);
			});

		});
		$("#next_button").click(function() {
			readerModel.nextChapter(function(data) {
				readUI(data);
			});

		});
	}

	main();
}