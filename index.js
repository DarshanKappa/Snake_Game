

class Snac {
        constructor(top, left, width, height, side, level) {
            this.top = top;
            this.left = left;
            this.width = width;
            this.height = height;
            this.side = side;
            this.level = level;
        }
    }

    class Queue {
        constructor() {
            this.front = -1
            this.rear = -1
            this.array = new Array(100);
        }
        insert(data) {
            if (this.front == (this.rear + 1) % 100) {
                console.log("Queue is Full")
                return
            }
            if (this.front == -1) {
                this.front = 0
                this.rear = 0
            }
            else {

                this.rear = (this.rear + 1) % 100
            }
            this.array[this.rear] = data
            //console.log(queue.rear+"rear insert")
            //console.log(queue.front+"front insert") 
        }
        display() {
            if (this.front == -1) {
                console.log('Queue is Empty')
                return
            }
            let point = this.front
            let t = 0
            while (t < 100) {

                console.log(this.array[point])

                if (point == this.rear) {
                    break
                }
                point = point + 1
                t = t + 1
            }
        }
        delete() {
            if (this.front == -1) {
                console.log('Queue is Empty')
                return
            }

            let data = this.array[this.front]
            if (this.front == this.rear) {
                this.front = this.rear = -1
            } else {
                this.front = (this.front + 1) % 100;
            }
            //console.log(queue.rear+"rear delete")
            //console.log(queue.front+"front delete")
            return ("Deleted data is " + data)
        }


    }



    $('body').click(function (){
        $('#put').focus()
    })





    function myFunction(event) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;

    }
    function red() {
        document.getElementById("container").background = 'red'
    }




    document.getElementById('eating_audio').innerHTML = `<audio autoplay muted>   <source src="sounds/Chewing-popcorn-epic-big-crunch-www.fesliyanstudios.com.mp3" type="audio/mpeg">  </audio> `
    document.getElementById('game_over_audio').innerHTML = `<audio autoplay muted >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

    let stop1 = 0
    let x = 0
    let y = 0
    let width1 = 20
    let side = 0
    let top1 = 10
    let height2 = 20
    let node
    let b = 3 / 2
    let length = 20 / 2
    let changes = 10 / 2
    let time = 60
    let eat = 0
    let hold = 0
    let maxwidth
    let maxheight

    // Start Score Board
    let score = (length - 10) * 10

    // End Score Board

    var mainheight
    maxheight = $('#container').height()
    var i = 0
    mainheight = $('#main').css({ height: i + "vw" })

    heigth()
    console.log(maxheight)
    console.log($('#main').height())
    function heigth() {
        if (maxheight <= $('#main').height()) {
            console.log("return")
            return 0;
        }
        i = i + 1;
        mainheight = $('#main').css({ height: i + "vw" })
        //console.log("123")
        heigth()
    }

    $('#container').css({ height: i + "vw" })
    $('#main').css({ height: i + "vw" })


    $('.snac').css({ width: length + "vw", height: b + "vw" });
    $('#box1').css({ width: length + "vw", height: b + "vw" });

    let queue = new Queue()

    var snac1 = new Snac(9, 0, length, b, "r", 1)

    let Ball = new Snac(0, 0, b, b, "ball", 0)
    $('#ball').css({ width: b + "vw", height: b + "vw" })
    $('#ball').hide()

    queue.insert(snac1)

    $(document).ready(function () {
        console.log("document loaded");
        setTimeout(snacstartrun, 5)
    });


    $('#put').keydown(function (event) {
        if (event.keyCode == 37) {
            leftsidekey()
        }
        if (event.keyCode == 38) {
            upsidekey()
        }
        if (event.keyCode == 39) {
            rightsidekey()
        }
        if (event.keyCode == 40) {
            downsidekey()
        }
    })


    function leftsidekey(){
    if ((queue.array[queue.rear]).side == "d") {
        var snac3 = new Snac(((queue.array[queue.rear]).top + (queue.array[queue.rear]).height - b), (queue.array[queue.rear]).left - 3 / 2, b + 3 / 2, b, "l", 2)
        queue.insert(snac3)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: b + "vw", width: (b + 3 / 2) + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }

    if ((queue.array[queue.rear]).side == "u") {
        var snac3 = new Snac((queue.array[queue.rear]).top, (queue.array[queue.rear]).left - 3 / 2, b + 3 / 2, b, "l", 2)
        queue.insert(snac3)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: b + "vw", width: (b + 3 / 2) + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }
    snacout()
}




    function upsidekey(){
    if ((queue.array[queue.rear]).side == "l") {
        var snac4 = new Snac((queue.array[queue.rear]).top - 3 / 2, (queue.array[queue.rear]).left, b, b + 3 / 2, "u", 2)
        queue.insert(snac4)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: (b + 3 / 2) + "vw", width: b + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }

    if ((queue.array[queue.rear]).side == "r") {
        var snac4 = new Snac((queue.array[queue.rear]).top - 3 / 2, ((queue.array[queue.rear]).left + (queue.array[queue.rear]).width - b), b, b + 3 / 2, "u", 2)
        queue.insert(snac4)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: (b + 3 / 2) + "vw", width: b + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }
    snacout()
}



    function rightsidekey(){
    if ((queue.array[queue.rear]).side == "u") {
        var snac1 = new Snac((queue.array[queue.rear]).top, (queue.array[queue.rear]).left, b + 3 / 2, b, "r", 2)
        queue.insert(snac1)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: b + "vw", width: (b + 3 / 2) + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }

    if ((queue.array[queue.rear]).side == "d") {
        var snac1 = new Snac(((queue.array[queue.rear]).top + (queue.array[queue.rear].height - b)), (queue.array[queue.rear]).left, b + 3 / 2, b, "r", 2)
        queue.insert(snac1)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: b + "vw", width: (b + 3 / 2) + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }
    snacout()
}
  

    function downsidekey(){
    if ((queue.array[queue.rear]).side == "r") {
        var snac2 = new Snac((queue.array[queue.rear]).top, ((queue.array[queue.rear]).left + (queue.array[queue.rear]).width - b), b, b + 3 / 2, "d", 2)
        queue.insert(snac2)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: (b + 3 / 2) + "vw", width: b + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }
    if ((queue.array[queue.rear]).side == "l") {
        var snac2 = new Snac((queue.array[queue.rear]).top, (queue.array[queue.rear]).left, b, b + 3 / 2, "d", 2)
        queue.insert(snac2)

        $('#main').append('<div class="snac"></div>')

        sidechanges()

        $('.snac').last().css({ height: (b + 3 / 2) + "vw", width: b + "vw", background: "blueviolet", top: (queue.array[queue.rear]).top + "vw", left: (queue.array[queue.rear]).left + "vw" })
    }
    snacout()
}



    function sidechanges() {

        // Changes Start -----
        if ((queue.array[queue.front]).side == "r") {
            if ((queue.array[queue.front]).width <= 3) {
                var widthvalue = (queue.array[queue.front]).width;
                queue.delete()
                $('.snac').first().remove()
                //console.log("in")
                //console.log(widthvalue)
                //(queue.array[queue.front]).width = (queue.array[queue.front]).width - ((queue.array[queue.front]).width - b);
                //(queue.array[queue.front]).left = (queue.array[queue.front]).left + ((queue.array[queue.front]).width -b);
                //$('.snac').first().hide()
                if ((queue.array[queue.front]).side == "u") {
                    (queue.array[queue.front]).height = (queue.array[queue.front]).height - (3 - widthvalue);
                } else {
                    (queue.array[queue.front]).height = (queue.array[queue.front]).height - (3 - widthvalue);
                    (queue.array[queue.front]).top = (queue.array[queue.front]).top + (3 - widthvalue);
                }
            } else {
                //console.log("out");
                //console.log((queue.array[queue.front]).width);
                (queue.array[queue.front]).width = (queue.array[queue.front]).width - 3 / 2;
                (queue.array[queue.front]).left = (queue.array[queue.front]).left + 3 / 2;
            }
        } else {
            if ((queue.array[queue.front]).side == "d") {
                if ((queue.array[queue.front]).height <= 3) {
                    var heigthvalue = (queue.array[queue.front]).height
                    queue.delete()
                    $('.snac').first().remove()
                    //console.log("in")
                    //console.log(heigthvalue)
                    // (queue.array[queue.front]).height = (queue.array[queue.front]).height - ((queue.array[queue.front]).height -b);
                    // (queue.array[queue.front]).top = (queue.array[queue.front]).top + ((queue.array[queue.front]).height - b)
                    //$('.snac').first().hide()
                    if ((queue.array[queue.front]).side == "l") {
                        (queue.array[queue.front]).width = (queue.array[queue.front]).width - (3 - heigthvalue);
                    } else {
                        (queue.array[queue.front]).width = (queue.array[queue.front]).width - (3 - heigthvalue);
                        (queue.array[queue.front]).left = (queue.array[queue.front]).left + (3 - heigthvalue);
                    }

                } else {
                    (queue.array[queue.front]).height = (queue.array[queue.front]).height - 3 / 2;
                    (queue.array[queue.front]).top = (queue.array[queue.front]).top + 3 / 2;
                }
            } else {
                if ((queue.array[queue.front]).side == "l") {
                    if ((queue.array[queue.front]).width <= 3) {
                        var widthvalue = (queue.array[queue.front]).width;
                        queue.delete()
                        $('.snac').first().remove()
                        // console.log("in")
                        // console.log(widthvalue)
                        //(queue.array[queue.front]).width = (queue.array[queue.front]).width - ((queue.array[queue.front]).width - b);
                        //$('.snac').first().hide()
                        if ((queue.array[queue.front]).side == "u") {
                            (queue.array[queue.front]).height = (queue.array[queue.front]).height - (3 - widthvalue);
                        } else {
                            (queue.array[queue.front]).height = (queue.array[queue.front]).height - (3 - widthvalue);
                            (queue.array[queue.front]).top = (queue.array[queue.front]).top + (3 - widthvalue);
                        }
                    } else {
                        (queue.array[queue.front]).width = (queue.array[queue.front]).width - 3 / 2;
                    }
                } else {
                    if ((queue.array[queue.front]).height <= 3) {
                        var heigthvalue = (queue.array[queue.front]).height
                        queue.delete()
                        $('.snac').first().remove()
                        // console.log("in")
                        // console.log(heigthvalue)
                        //(queue.array[queue.front]).height = (queue.array[queue.front]).height - ((queue.array[queue.front]).height - b);
                        //$('.snac').first().hide()
                        if ((queue.array[queue.front]).side == "l") {
                            (queue.array[queue.front]).width = (queue.array[queue.front]).width - (3 - heigthvalue);
                        } else {
                            (queue.array[queue.front]).width = (queue.array[queue.front]).width - (3 - heigthvalue);
                            (queue.array[queue.front]).left = (queue.array[queue.front]).left + (3 - heigthvalue);
                        }
                    } else {
                        (queue.array[queue.front]).height = (queue.array[queue.front]).height - 3 / 2;
                    }
                }
            }
        }
        // Changes End -------

    }

    function snacout() {

        //node = 2;
        if (queue.rear != queue.front && queue.rear != (queue.front + 1) % 100) {
            for (node = 2; queue.rear != (queue.front + node - 1) % 100; node++) {
                //console.log(node)

                if (queue.array[queue.rear].side == 'l') {
                    if ((queue.array[(queue.front + node - 2) % 100]).side == 'u' || (queue.array[(queue.front + node - 2) % 100]).side == 'd') {
                        if ((queue.array[(queue.front + node - 2) % 100]).left + b > (queue.array[queue.rear]).left && (queue.array[queue.rear]).left >= (queue.array[(queue.front + node - 2) % 100]).left) {
                            if ((queue.array[queue.rear]).top < (queue.array[(queue.front + node - 2) % 100]).top + (queue.array[(queue.front + node - 2) % 100]).height && (queue.array[(queue.front + node - 2) % 100]).top < (queue.array[queue.rear]).top + b) {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1;
                                //console.log("l-out")
                                break;
                            }
                        }
                    }
                }
                if (queue.array[queue.rear].side == 'r') {
                    if ((queue.array[(queue.front + node - 2) % 100]).side == 'u' || (queue.array[(queue.front + node - 2) % 100]).side == 'd') {
                        if ((queue.array[(queue.front + node - 2) % 100]).left + b >= (queue.array[queue.rear]).left + (queue.array[queue.rear]).width && (queue.array[queue.rear]).left + (queue.array[queue.rear]).width > (queue.array[(queue.front + node - 2) % 100]).left) {
                            //console.log('in')
                            if ((queue.array[queue.rear]).top < (queue.array[(queue.front + node - 2) % 100]).top + (queue.array[(queue.front + node - 2) % 100]).height && (queue.array[(queue.front + node - 2) % 100]).top < (queue.array[queue.rear]).top + b) {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1;
                                console.log("r-out")
                                break;
                            }
                        }
                    }
                }
                if (queue.array[queue.rear].side == 'u') {
                    if ((queue.array[(queue.front + node - 2) % 100]).side == 'l' || (queue.array[(queue.front + node - 2) % 100]).side == 'r') {
                        if ((queue.array[(queue.front + node - 2) % 100]).top + b > (queue.array[queue.rear]).top && (queue.array[queue.rear]).top >= (queue.array[(queue.front + node - 2) % 100]).top) {
                            if ((queue.array[queue.rear]).left < (queue.array[(queue.front + node - 2) % 100]).left + (queue.array[(queue.front + node - 2) % 100]).width && (queue.array[(queue.front + node - 2) % 100]).left < (queue.array[queue.rear]).left + b) {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1;
                                //console.log("u-out")
                                break;
                            }
                        }
                    }
                }
                if (queue.array[queue.rear].side == 'd') {
                    if ((queue.array[(queue.front + node - 2) % 100]).side == 'l' || (queue.array[(queue.front + node - 2) % 100]).side == 'r') {
                        if ((queue.array[(queue.front + node - 2) % 100]).top + b >= (queue.array[queue.rear]).top + (queue.array[queue.rear]).height && (queue.array[queue.rear]).top + (queue.array[queue.rear]).height > (queue.array[(queue.front + node - 2) % 100]).top) {
                            if ((queue.array[queue.rear]).left < (queue.array[(queue.front + node - 2) % 100]).left + (queue.array[(queue.front + node - 2) % 100]).width && (queue.array[(queue.front + node - 2) % 100]).left < (queue.array[queue.rear]).left + b) {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1;
                                //console.log("d-out")
                                break;
                            }
                        }
                    }
                }
            }
        }

    }

    // See The Ball

    let errorh = 0
    let errorv = 0
    let randomh
    let randomv


    function ball() {

        do {
            errorh = 0;
            errorv = 0;
            horizonatal();
            vertical();
            //console.log("h "+errorh)
            //console.log("v "+errorv)
        } while (errorh == 1 || errorv == 1)
        //console.log(randomh)
        //console.log(randomv)
        //console.log(Ball)
        Ball.top = randomv
        Ball.left = randomh
        //console.log(Ball)
        $('#ball').css({ left: randomh + "vw", top: randomv + "vw" })
        $('#ball').show()
        eat = 1

    }

    function horizonatal() {

        randomh = parseInt(Math.random() * 10000000) % 48.5
        //console.log("hori"+parseInt(Math.random()*1000)%98)
        var i = queue.front
        var t
        do {
            if ((queue.array[i]).side == 'u' || (queue.array[i]).side == 'd') {
                if ((queue.array[i]).left < randomh + b && randomh < (queue.array[i]).left + b) {
                    errorh = 1;
                    return (i);
                    break;
                }
            }
            t = i
            i = (i + 1) % 100
        } while (t != queue.rear)
        return (100);
    }

    function vertical() {

        randomv = parseInt(Math.random() * 10000000000) % (i - 1)
        //console.log("verti"+parseInt(Math.random()*1000)%68)
        var j = queue.front
        var t
        do {
            if ((queue.array[j]).side == 'l' || (queue.array[j]).side == 'r') {
                if ((queue.array[j]).top < randomh + b && randomh < (queue.array[j]).top + b) {
                    errorv = 1;
                    return (j);
                    break;
                }
            }
            t = j
            j = (j + 1) % 100
        } while (t != queue.rear)
        return (100);
    }

    // End See The Ball



    // Eat the Ball

    function eat_the_ball() {

        if ((queue.array[queue.rear]).side == 'l') {
            if (Ball.left + b > (queue.array[queue.rear]).left && (queue.array[queue.rear]).left >= Ball.left - 3 / 2) {
                if ((queue.array[queue.rear]).top < Ball.top + Ball.height && Ball.top < (queue.array[queue.rear]).top + b) {
                    console.log("catch l")
                    document.getElementById('eating_audio').innerHTML = `<audio autoplay>   <source src="sounds/Chewing-popcorn-epic-big-crunch-www.fesliyanstudios.com.mp3" type="audio/mpeg">  </audio> `
                    $('#ball').hide()
                    eat = 0
                    hold = 0
                    if ((queue.array[queue.front]).side == 'l') {
                        (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                        $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
                        length = length + 3 / 2;
                    } else {
                        if ((queue.array[queue.front]).side == 'r') {
                            //console.log('rin');
                            (queue.array[queue.front]).left = (queue.array[queue.front]).left - 3 / 2;
                            (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                            $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw", left: (queue.array[queue.front]).left + "vw" });
                            length = length + 3 / 2;
                        } else {
                            if ((queue.array[queue.front]).side == 'u') {
                                (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
                                length = length + 3 / 2;
                            } else {
                                (queue.array[queue.front]).top = (queue.array[queue.front]).top - 3 / 2;
                                (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw", top: (queue.array[queue.front]).top + "vw" });
                                length = length + 3 / 2;
                            }
                        }
                    }
                }
            }

        } else {

            if ((queue.array[queue.rear]).side == 'u') {

                if (Ball.top + b > (queue.array[queue.rear]).top && (queue.array[queue.rear]).top >= Ball.top - 3 / 2) {
                    if ((queue.array[queue.rear]).left < Ball.left + Ball.width && Ball.left < (queue.array[queue.rear]).left + b) {
                        console.log("catch u")
                        document.getElementById('eating_audio').innerHTML = `<audio autoplay>   <source src="sounds/Chewing-popcorn-epic-big-crunch-www.fesliyanstudios.com.mp3" type="audio/mpeg">  </audio> `
                        $('#ball').hide()
                        eat = 0
                        hold = 0
                        if ((queue.array[queue.front]).side == 'l') {
                            (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                            $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
                            length = length + 3 / 2;
                        } else {
                            if ((queue.array[queue.front]).side == 'r') {
                                //console.log('rin');
                                (queue.array[queue.front]).left = (queue.array[queue.front]).left - 3 / 2;
                                (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                                $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw", left: (queue.array[queue.front]).left + "vw" });
                                length = length + 3 / 2;
                            } else {
                                if ((queue.array[queue.front]).side == 'u') {
                                    (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                    $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw" });
                                    length = length + 3 / 2;
                                } else {
                                    (queue.array[queue.front]).top = (queue.array[queue.front]).top - 3 / 2;
                                    (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                    $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw", top: (queue.array[queue.front]).top + "vw" });
                                    length = length + 3 / 2;
                                }
                            }
                        }
                    }
                }

            } else {

                if ((queue.array[queue.rear]).side == 'r') {

                    if (Ball.left + b + 3 / 2 >= (queue.array[queue.rear]).left + (queue.array[queue.rear]).width && (queue.array[queue.rear]).left + (queue.array[queue.rear]).width > Ball.left) {
                        if ((queue.array[queue.rear]).top < Ball.top + Ball.height && Ball.top < (queue.array[queue.rear]).top + b) {
                            console.log("catch r")
                            document.getElementById('eating_audio').innerHTML = `<audio autoplay>   <source src="sounds/Chewing-popcorn-epic-big-crunch-www.fesliyanstudios.com.mp3" type="audio/mpeg">  </audio> `
                            $('#ball').hide()
                            eat = 0
                            hold = 0
                            if ((queue.array[queue.front]).side == 'l') {
                                (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                                $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
                                length = length + 3 / 2;
                            } else {
                                if ((queue.array[queue.front]).side == 'r') {
                                    //console.log('rin');
                                    (queue.array[queue.front]).left = (queue.array[queue.front]).left - 3 / 2;
                                    (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                                    $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw", left: (queue.array[queue.front]).left + "vw" });
                                    length = length + 3 / 2;
                                } else {
                                    if ((queue.array[queue.front]).side == 'u') {
                                        (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw" });
                                        length = length + 3 / 2;
                                    } else {
                                        (queue.array[queue.front]).top = (queue.array[queue.front]).top - 3 / 2;
                                        (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw", top: (queue.array[queue.front]).top + "vw" });
                                        length = length + 3 / 2;
                                    }
                                }
                            }
                        }
                    }

                } else {

                    if (Ball.top + b + 3 / 2 >= (queue.array[queue.rear]).top + (queue.array[queue.rear]).height && (queue.array[queue.rear]).top + (queue.array[queue.rear]).height > Ball.top) {
                        if ((queue.array[queue.rear]).left < Ball.left + Ball.width && Ball.left < (queue.array[queue.rear]).left + b) {
                            console.log("catch d")
                            document.getElementById('eating_audio').innerHTML = `<audio autoplay>   <source src="sounds/Chewing-popcorn-epic-big-crunch-www.fesliyanstudios.com.mp3" type="audio/mpeg">  </audio> `
                            $('#ball').hide()
                            eat = 0
                            hold = 0
                            if ((queue.array[queue.front]).side == 'l') {
                                (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                                $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
                                length = length + 3 / 2;
                            } else {
                                if ((queue.array[queue.front]).side == 'r') {
                                    //console.log('rin');
                                    (queue.array[queue.front]).left = (queue.array[queue.front]).left - 3 / 2;
                                    (queue.array[queue.front]).width = (queue.array[queue.front]).width + 3 / 2;
                                    $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw", left: (queue.array[queue.front]).left + "vw" });
                                    length = length + 3 / 2;
                                } else {
                                    if ((queue.array[queue.front]).side == 'u') {
                                        (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw" });
                                        length = length + 3 / 2;
                                    } else {
                                        (queue.array[queue.front]).top = (queue.array[queue.front]).top - 3 / 2;
                                        (queue.array[queue.front]).height = (queue.array[queue.front]).height + 3 / 2;
                                        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw", top: (queue.array[queue.front]).top + "vw" });
                                        length = length + 3 / 2;
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }

    }


    function snacstartrun() {
        if (queue.front == queue.rear) {
            if (queue.array[queue.front].side == "r") {
                if ((queue.array[queue.front]).left < 50 - length) {
                    runsnacright1();
                } else {
                    document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`
                    stop1 = 1
                }
            } else {
                if (queue.array[queue.front].side == "d") {
                    if ((queue.array[queue.front]).top < i - length) {
                        runsnacdown1();
                    } else {
                        document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                        stop1 = 1
                    }
                } else {
                    if (queue.array[queue.front].side == "l") {
                        if ((queue.array[queue.front]).left > 0) {
                            runsnacleft1();
                        } else {
                            document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                            stop1 = 1
                        }
                    } else {
                        if (queue.array[queue.front].side == "u") {
                            if ((queue.array[queue.front]).top > 0) {
                                runsnacup1();
                            } else {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1
                            }
                        }
                    }
                }
            }
        } else {


            if (queue.array[queue.rear].side == "r") {
                if ((queue.array[queue.rear]).width < length && ((queue.array[queue.rear]).left + (queue.array[queue.rear]).width) < 50) {
                    runsnacright2();
                } else {
                    document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                    stop1 = 1
                }
            } else {
                if (queue.array[queue.rear].side == "d") {
                    if ((queue.array[queue.rear]).height < length && ((queue.array[queue.rear]).top + (queue.array[queue.rear]).height) < i) {
                        //console.log((queue.array[queue.rear]).height)
                        runsnacdown2();
                    } else {
                        document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                        stop1 = 1
                    }
                } else {
                    if (queue.array[queue.rear].side == "l") {
                        if ((queue.array[queue.rear]).width < length && (queue.array[queue.rear]).left > 0) {
                            runsnacleft2();
                        } else {
                            document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                            stop1 = 1
                        }
                    } else {
                        if (queue.array[queue.rear].side == "u") {
                            if ((queue.array[queue.rear]).height < length && (queue.array[queue.rear]).top > 0) {
                                runsnacup2();
                            } else {
                                document.getElementById('game_over_audio').innerHTML = `<audio autoplay >           <source src="sounds/gameoversound.wav" type="audio/mpeg">      </audio>`

                                stop1 = 1
                            }
                        }
                    }
                }
            }



            if (queue.array[queue.front].side == "d") {
                if ((queue.array[queue.front]).height > b) {
                    runsnacdown3();
                }

            } else {
                if (queue.array[queue.front].side == "l") {
                    if ((queue.array[queue.front]).width > b) {
                        runsnacleft3();
                    }

                } else {
                    if (queue.array[queue.front].side == "u") {
                        if ((queue.array[queue.front]).height > b) {
                            runsnacup3();
                        }

                    } else {
                        if (queue.array[queue.front].side == "r") {
                            if ((queue.array[queue.front]).width > b) {
                                runsnacright3();
                            }
                            // else{
                            //     console.log('in')
                            //     $('#main').children().first().hide()
                            //     queue.delete()
                            // }

                        }
                    }
                }
            }
        }

        snacout();
        if (eat == 1) {
            eat_the_ball();
        }
        if (eat == 0 && hold == 0) {
            hold = 1
            setTimeout(ball, 3000)
        }





        // if(queue.front < queue.rear){
        //     node = queue.rear - queue.front + 1
        // }else{
        //     node = 100 - (queue.front - queue.rear) + 1
        // }



        /*  if (side == 1) {
              if ((queue.array[queue.front]).width > 4){
                  runsnacright3()
              }
              else{
                  $('#main').children().first().hide()
                  //queue.delete()
                  //stop1 = 1
              }
  
              if ((queue.array[queue.front + 1]).height < 20){
                  runsnacdown2() 
              }
              else{
                  if((queue.array[queue.front + 1]).top < 50)
                  runsnacdown1()
              }
              
  
  
          } else {
              if ((queue.array[queue.front]).left < 80) {
                  runsnacright1();
              } else {
                  stop1 = 1
              }
          }*/



        //Start The Score Board
        $('#score').html((length - 10) * 10)
        //Start The Score Board


        if (stop1 == 0) {
            setTimeout(snacstartrun, time)
        } else {
            //$('#container').hide()
        }
        console.log("loop")


    }

    // Right

    function runsnacright1() {
        (queue.array[queue.front]).left = (((queue.array[queue.front]).left) * 10 + changes) / 10;
        $('.snac').first().css({ left: (queue.array[queue.front]).left + "vw" });
    }
    function runsnacright2() {
        (queue.array[queue.rear]).width = (((queue.array[queue.rear]).width) * 10 + changes) / 10;
        $('.snac').last().css({ width: (queue.array[queue.rear]).width + "vw" });
    }
    function runsnacright3() {
        (queue.array[queue.front]).width = (((queue.array[queue.front]).width) * 10 - changes) / 10;
        $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
        (queue.array[queue.front]).left = (((queue.array[queue.front]).left) * 10 + changes) / 10;
        $('.snac').first().css({ left: ((queue.array[queue.front]).left) + "vw" });
        //console.log(queue.array[queue.front].width)
        if ((queue.array[queue.front]).width == b) {
            $('.snac').first().remove()

            queue.delete()

        }
    }
    function runsnacright4() {
    }


    // Down
    function runsnacdown1() {
        (queue.array[queue.front]).top = (((queue.array[queue.front]).top) * 10 + changes) / 10;
        $('.snac').first().css({ top: (queue.array[queue.front]).top + "vw" });
    }
    function runsnacdown2() {

        (queue.array[queue.rear]).height = (((queue.array[queue.rear]).height) * 10 + changes) / 10;
        $('.snac').last().css({ height: (queue.array[queue.rear]).height + "vw" });
    }
    function runsnacdown3() {
        (queue.array[queue.front]).height = (((queue.array[queue.front]).height) * 10 - changes) / 10;
        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw" });
        (queue.array[queue.front]).top = (((queue.array[queue.front]).top) * 10 + changes) / 10;
        $('.snac').first().css({ top: ((queue.array[queue.front]).top) + "vw" });
        if ((queue.array[queue.front]).height == b) {
            $('.snac').first().remove()
            queue.delete()

        }
    }
    function runsnacdown4() {
    }


    // Left
    function runsnacleft1() {
        (queue.array[queue.front]).left = (((queue.array[queue.front]).left) * 10 - changes) / 10;
        $('.snac').first().css({ left: (queue.array[queue.front]).left + "vw" });
    }
    function runsnacleft2() {

        (queue.array[queue.rear]).width = (((queue.array[queue.rear]).width) * 10 + changes) / 10;
        $('.snac').last().css({ width: (queue.array[queue.rear]).width + "vw" });
        (queue.array[queue.rear]).left = (((queue.array[queue.rear]).left) * 10 - changes) / 10;
        $('.snac').last().css({ left: (queue.array[queue.rear]).left + "vw" });


    }
    function runsnacleft3() {
        (queue.array[queue.front]).width = (((queue.array[queue.front]).width) * 10 - changes) / 10;
        $('.snac').first().css({ width: (queue.array[queue.front]).width + "vw" });
        // (queue.array[queue.front]).left = (((queue.array[queue.front]).left)*10 + 1)/10 ;
        // $('#main').children().first().css({ left: ((queue.array[queue.front]).left) + "vw" });
        if ((queue.array[queue.front]).width == b) {
            $('.snac').first().remove();
            queue.delete();

        }
    }
    function runsnacleft4() {
    }


    // Up
    function runsnacup1() {
        (queue.array[queue.front]).top = (((queue.array[queue.front]).top) * 10 - changes) / 10;
        $('.snac').first().css({ top: (queue.array[queue.front]).top + "vw" });
    }
    function runsnacup2() {

        (queue.array[queue.rear]).height = (((queue.array[queue.rear]).height) * 10 + changes) / 10;
        $('.snac').last().css({ height: (queue.array[queue.rear]).height + "vw" });
        (queue.array[queue.rear]).top = (((queue.array[queue.rear]).top) * 10 - changes) / 10;
        $('.snac').last().css({ top: (queue.array[queue.rear]).top + "vw" });
    }
    function runsnacup3() {
        (queue.array[queue.front]).height = (((queue.array[queue.front]).height) * 10 - changes) / 10;
        $('.snac').first().css({ height: (queue.array[queue.front]).height + "vw" });
        // (queue.array[queue.front]).top = (((queue.array[queue.front]).top)*10 + 1)/10 ;
        // $('#main').children().first().css({ top: ((queue.array[queue.front]).top) + "vw" });
        if ((queue.array[queue.front]).height == b) {
            $('.snac').first().remove()
            queue.delete()
        }
    }
    function runsnacup4() {
    }



    // function snacchange() {
    //     (queue.array[queue.front]).width = (queue.array[queue.front]).width - .5;
    //     console.log((queue.array[queue.front]).width);
    //     $('#main').children().first().css({ width: (queue.array[queue.front]).width + "vw" });
    //     (queue.array[0]).left = (queue.array[0]).left + .5 ;
    //     console.log((queue.array[queue.front]).left);
    //     $('#main').children().first().css({ left: ((queue.array[queue.front]).left) + "vw" });
    // }

    // function runsnacdown1() {
    //     (queue.array[queue.front + 1]).top = (queue.array[queue.front + 1]).top + .5;
    //     console.log((queue.array[queue.front + 1]).top);
    //     $('#main').children().last().css({top: (queue.array[queue.front + 1]).top + "vw"});
    // }

    // function runsnacdown2() {
    //     (queue.array[queue.front + 1]).height = (queue.array[queue.front + 1]).height + .5
    //     $('#main').children().last().css({height: (queue.array[queue.front + 1]).height + "vw"})
    // }




    let xmain
    let ymain
    let x1
    let y1
    let x2
    let y2
    let dx
    let dy

    function touchesmove(event){
        xmain = event.touches[0].clientX;
        ymain = event.touches[0].clientY;

    }

    function startfun() {
        $('#container').css({ background: 'white' })
        x1 = xmain;
        y1 = ymain;

    }
    
    function endfun() {
        $('#container').css({ background: 'black' })
        x2 = xmain;
        y2 = ymain;


        dx = x2 - x1;
        dy = y2 - y1;

        if (dx < 0) { //left
            if (dy < 0) { //up
                if ((-dx) < (-dy)) { //side u
                    upsidekey()
                    $('#container').css({ background: 'green' })
                } else { //side l
                    leftsidekey()
                    $('#container').css({ background: 'red' })
                }
            } else { //down
                if ((-dx) < (dy)) { //side d
                    downsidekey()
                    $('#container').css({ background: 'yellow' })
                } else { //side l
                    leftsidekey()
                    $('#container').css({ background: 'red' })
                }
            }


        } else { //right
            if (dy < 0) { //up
                if ((dx) < (-dy)) { //side u
                    upsidekey()
                    $('#container').css({ background: 'green' })
                } else { //side r
                    rightsidekey()
                    $('#container').css({ background: 'blue' })
                }
            } else { //down
                if ((dx) < (dy)) { //side d
                    downsidekey()
                    $('#container').css({ background: 'yellow' })
                } else { //side r
                    rightsidekey()
                    $('#container').css({ background: 'blue' })
                }
            }
            
        }
    }


