import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:candv/utils.dart';
import 'package:flutter/material.dart';

class DesktopSliver extends StatefulWidget {
  DesktopSliver({Key? key}) : super(key: key);

  @override
  State<DesktopSliver> createState() => _DesktopSliverState();
}

class _DesktopSliverState extends State<DesktopSliver> {
  List<Widget> mybox = [
    MyBox(image: 'images/p2.jpeg'),
    MyBox(image: 'images/p3.jpeg'),
    MyBox(image: 'images/p4.jpeg'),
    MyBox(image: 'images/p5.jpeg'),
    MyBox(image: 'images/p6.jpeg'),
    MyBox(image: 'images/p7.jpeg'),
    MyBox(image: 'images/p8.jpeg'),
    MyBox(image: 'images/9.jpeg'),
    MyBox(image: 'images/10.jpeg'),
    MyBox(image: 'images/11.jpeg'),
    MyBox(image: 'images/12.jpeg'),
    MyBox(image: 'images/13.jpeg'),
    MyBox(image: 'images/14.jpeg'),
    MyBox(image: 'images/15.jpeg'),
    MyBox(image: 'images/16.jpeg'),
    MyBox(image: 'images/17.jpeg'),
    MyBox(image: 'images/18.jpeg'),
    MyBox(image: 'images/p1.jpeg'),
  ];

  List<Widget> cards = [
    MyBox(image: 'images/vic.png'),
    MyBox(image: 'images/vic.png'),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        // ignore: prefer_const_literals_to_create_immutables
        slivers: [
          // ignore: prefer_const_constructors

          SliverToBoxAdapter(
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Flexible(
                      flex: 1,
                      child: Container(
                        height: MediaQuery.of(context).size.height * 0.2,
                        width: MediaQuery.of(context).size.height * 0.9,
                        decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage("images/heart.png"),
                              fit: BoxFit.contain), //change image fill type
                        ),
                      ),
                    ),
                    // SizedBox(
                    //   width: MediaQuery.of(context).size.height * 0.1,
                    // ),
                    Flexible(
                      flex: 1,
                      child: Container(
                        height: MediaQuery.of(context).size.height * 0.2,
                        width: double.infinity,
                        decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage("images/heart.png"),
                              fit: BoxFit.contain), //change image fill type
                        ),
                      ),
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Flexible(
                      child: Container(
                        height: MediaQuery.of(context).size.height * 0.9,
                        width: MediaQuery.of(context).size.height * 0.9,
                        decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage("images/1.png"),
                              fit: BoxFit.contain), //change image fill type
                        ),
                      ),
                    ),
                  ],
                ),
                Container(
                  height: MediaQuery.of(context).size.height * 0.2,
                  width: MediaQuery.of(context).size.height * 0.3,
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage("images/arrow.png"),
                        fit: BoxFit.contain), //change image fill type
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Flexible(
                      child: Container(
                        height: MediaQuery.of(context).size.height * 0.9,
                        width: MediaQuery.of(context).size.height * 0.9,
                        decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage("images/2.png"),
                              fit: BoxFit.contain), //change image fill type
                        ),
                      ),
                    ),
                  ],
                ),
                Container(
                  height: MediaQuery.of(context).size.height * 0.9,
                  width: MediaQuery.of(context).size.height * 0.9,
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage("images/invite.png"),
                        fit: BoxFit.contain), //change image fill type
                  ),
                ),
                SizedBox(
                  height: MediaQuery.of(context).size.height * 0.1,
                ),
              ],
            ),
          ),

          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: AnimatedTextKit(
                animatedTexts: [
                  TypewriterAnimatedText(
                      speed: Duration(milliseconds: 30),
                      textStyle: TextStyle(
                          fontSize: MediaQuery.of(context).size.height * 0.02,
                          fontStyle: FontStyle.italic,
                          color: Colors.red),
                      'A bit of our story through the lense of a camera...'),
                ],
              ),
            ),
          ),

          SliverGrid(
            // ignore: prefer_const_constructors
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              mainAxisSpacing: 20.0,
              crossAxisSpacing: 10.0,
              crossAxisCount: 2,
              childAspectRatio: 1.0,
            ),
            delegate: SliverChildBuilderDelegate(
              ((context, int index) {
                return Padding(
                    padding: const EdgeInsets.all(8), child: mybox[index]);
              }),
              childCount: mybox.length,
            ),
          ),
          SliverToBoxAdapter(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Flexible(
                  flex: 1,
                  child: Container(
                    height: MediaQuery.of(context).size.height * 0.2,
                    width: MediaQuery.of(context).size.height * 0.9,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                          image: AssetImage("images/heart.png"),
                          fit: BoxFit.contain), //change image fill type
                    ),
                  ),
                ),
                // SizedBox(
                //   width: MediaQuery.of(context).size.height * 0.1,
                // ),
                Flexible(
                  flex: 1,
                  child: Container(
                    height: MediaQuery.of(context).size.height * 0.2,
                    width: double.infinity,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                          image: AssetImage("images/heart.png"),
                          fit: BoxFit.contain), //change image fill type
                    ),
                  ),
                ),
              ],
            ),
          )
          // SliverToBoxAdapter(
          //   child: Row(
          //     children: [
          //       Expanded(
          //         child: Card(
          //           elevation: 0,
          //           child: Container(
          //             height: MediaQuery.of(context).size.height * 0.1,
          //             width: MediaQuery.of(context).size.width * 0.02,
          //             decoration: BoxDecoration(
          //               color: const Color(0xff700548),
          //             ),
          //             child: Padding(
          //               padding: EdgeInsets.symmetric(horizontal: 20),
          //               child: Row(
          //                 mainAxisAlignment: MainAxisAlignment.spaceBetween,
          //                 children: [
          //                   Flexible(
          //                     flex: 1,
          //                     child: Wrap(children: [
          //                       Text(
          //                         "Chigozie",
          //                         style: TextStyle(color: Colors.white),
          //                       ),
          //                       Icon(Icons.favorite, color: Colors.red),
          //                       Text(
          //                         "Victor",
          //                         style: TextStyle(color: Colors.white),
          //                       ),
          //                       SizedBox(
          //                         width: 100,
          //                       ),
          //                       Text("We look forward to your arrival",
          //                           style: TextStyle(color: Colors.white)),
          //                     ]),
          //                   ),
          //                 ],
          //               ),
          //             ),
          //           ),
          //         ),
          //       )
          //     ],
          //   ),
          // )
        ],
      ),
    );
  }
}
