(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{438:function(t,s,a){"use strict";a.r(s);var v=a(19),n=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("Java多线程的锁都是基于对象的，Java中的每一个对象都可以作为一个锁")]),t._v("。还有一点需要注意的是，我们常听到的类锁其实也是对象锁。Java类只有一个Class对象（可以有多个实例对象，多个实例共享这个Class对象），而Class对象也是特殊的Java对象。所以我们常说的类锁，其实就是Class对象的锁。")]),t._v(" "),a("h2",{attrs:{id:"synchronized关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized关键字"}},[t._v("#")]),t._v(" synchronized关键字")]),t._v(" "),a("p",[a("code",[t._v("synchronized")]),t._v("关键字来给一段代码或一个方法上锁。有以下三种形式：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关键字在实例方法上，锁为当前实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instanceLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关键字在静态方法上，锁为当前Class对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关键字在代码块上，锁为括号里面的对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blockLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("##　锁的几种状态")]),t._v(" "),a("p",[t._v("Java 6 为了减少获得锁和释放锁带来的性能消耗，引入了 "),a("strong",[t._v("偏向锁")]),t._v(" 和 "),a("strong",[t._v("轻量级锁")]),t._v("。在Java 6 以前，所有的锁都是"),a("strong",[t._v("重量级")]),t._v("锁。所以在Java 6 及其以后，一个对象其实有四种锁状态，它们级别由低到高依次是：")]),t._v(" "),a("ul",[a("li",[t._v("无锁状态")]),t._v(" "),a("li",[t._v("偏向锁状态")]),t._v(" "),a("li",[t._v("轻量级锁状态")]),t._v(" "),a("li",[t._v("重量级锁状态")])]),t._v(" "),a("p",[t._v("无锁就是没有对资源进行锁定，任何线程都可以尝试去修改它，无锁在这里不再细讲。\n几种锁会随着竞争情况逐渐升级，锁的升级很容易发生，但是锁降级发生的条件会比较苛刻，"),a("strong",[t._v("锁降级发生在Stop The World期间")]),t._v("，当JVM进入安全点的时候，会检查是否有闲置的锁，然后进行降级。")]),t._v(" "),a("blockquote",[a("p",[t._v("关于锁降级有两点说明：")]),t._v(" "),a("ol",[a("li",[t._v("不同于大部分文章说锁不能降级，实际上HotSpot JVM 是支持锁降级的，文末有链接。")]),t._v(" "),a("li",[t._v("上面提到的Stop The World期间，以及安全点，这些知识是属于JVM的知识范畴，本文不做细讲。")])])]),t._v(" "),a("h3",{attrs:{id:"java对象头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java对象头"}},[t._v("#")]),t._v(" Java对象头")]),t._v(" "),a("p",[t._v("前面我们提到，Java的锁都是基于对象的。首先我们来看看一个对象的“锁”的信息是存放在什么地方的。")]),t._v(" "),a("p",[t._v("每个Java对象都有对象头。如果是非数组类型，则用2个字宽来存储对象头，如果是数组，则会用3个字宽来存储对象头。在32位处理器中，一个字宽是32位；在64位虚拟机中，一个字宽是64位。对象头的内容如下表：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("长度")]),t._v(" "),a("th",[t._v("内容")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("32/64bit")]),t._v(" "),a("td",[t._v("Mark Word")]),t._v(" "),a("td",[t._v("存储对象的hashCode或锁信息等")])]),t._v(" "),a("tr",[a("td",[t._v("32/64bit")]),t._v(" "),a("td",[t._v("Class Metadata Address")]),t._v(" "),a("td",[t._v("存储到对象类型数据的指针")])]),t._v(" "),a("tr",[a("td",[t._v("32/64bit")]),t._v(" "),a("td",[t._v("Array length")]),t._v(" "),a("td",[t._v("数组的长度（如果是数组）")])])])]),t._v(" "),a("p",[t._v("我们主要来看看Mark Word的格式：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("锁状态")]),t._v(" "),a("th",[t._v("29 bit 或 61 bit")]),t._v(" "),a("th",[t._v("1 bit 是否是偏向锁？")]),t._v(" "),a("th",[t._v("2 bit 锁标志位")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("无锁")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("01")])]),t._v(" "),a("tr",[a("td",[t._v("偏向锁")]),t._v(" "),a("td",[t._v("线程ID")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("01")])]),t._v(" "),a("tr",[a("td",[t._v("轻量级锁")]),t._v(" "),a("td",[t._v("指向栈中锁记录的指针")]),t._v(" "),a("td",[t._v("此时这一位不用于标识偏向锁")]),t._v(" "),a("td",[t._v("00")])]),t._v(" "),a("tr",[a("td",[t._v("重量级锁")]),t._v(" "),a("td",[t._v("指向互斥量（重量级锁）的指针")]),t._v(" "),a("td",[t._v("此时这一位不用于标识偏向锁")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("GC标记")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("此时这一位不用于标识偏向锁")]),t._v(" "),a("td",[t._v("11")])])])]),t._v(" "),a("p",[t._v("可以看到，当对象状态为偏向锁时，"),a("code",[t._v("Mark Word")]),t._v("存储的是偏向的线程ID；当状态为轻量级锁时，"),a("code",[t._v("Mark Word")]),t._v("存储的是指向线程栈中"),a("code",[t._v("Lock Record")]),t._v("的指针；当状态为重量级锁时，"),a("code",[t._v("Mark Word")]),t._v("为指向堆中的monitor对象的指针。")]),t._v(" "),a("h3",{attrs:{id:"偏向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[t._v("#")]),t._v(" 偏向锁")]),t._v(" "),a("p",[t._v("Hotspot的作者经过以往的研究发现大多数情况下"),a("strong",[t._v("锁不仅不存在多线程竞争，而且总是由同一线程多次获得")]),t._v("，于是引入了偏向锁。")]),t._v(" "),a("p",[t._v("偏向锁会偏向于第一个访问锁的线程，如果在接下来的运行过程中，该锁没有被其他的线程访问，则持有偏向锁的线程将永远不需要触发同步。也就是说，"),a("strong",[t._v("偏向锁在资源无竞争情况下消除了同步语句，连CAS操作都不做了，提高了程序的运行性能。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("大白话就是对锁设置一个变量，如果发现为true，代表资源无竞争，则无需再走各种加锁/解锁流程。如果为false，代表存在其他线程竞争资源，那么就会走后面的流程。")])]),t._v(" "),a("h4",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("p",[t._v("一个线程在第一次进入同步块时，会在对象头和栈帧中的锁记录里存储锁的偏向的线程ID。当下次该线程进入这个同步块时，会去检查锁的Mark Word里面是不是放的自己的线程ID。")]),t._v(" "),a("p",[t._v("如果是，表明该线程已经获得了锁，以后该线程在进入和退出同步块时不需要花费CAS操作来加锁和解锁；如果不是，就代表有另一个线程来竞争这个偏向锁。这个时候会尝试使用CAS来替换Mark Word里面的线程ID为新线程的ID，这个时候要分两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("成功，表示之前的线程不存在了， Mark Word里面的线程ID为新线程的ID，锁不会升级，仍然为偏向锁；")]),t._v(" "),a("li",[t._v("失败，表示之前的线程仍然存在，那么暂停之前的线程，设置偏向锁标识为0，并设置锁标志位为00，升级为轻量级锁，会按照轻量级锁的方式进行竞争锁。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("CAS: Compare and Swap")]),t._v(" "),a("p",[t._v("比较并设置。用于在硬件层面上提供原子性操作。在 Intel 处理器中，比较并交换通过指令cmpxchg实现。 比较是否和给定的数值一致，如果一致则修改，不一致则不修改。")])]),t._v(" "),a("p",[t._v("线程竞争偏向锁的过程如下：")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"/img/6/lock-small.png",alt:""}})])]),a("h4",{attrs:{id:"撤销偏向锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销偏向锁"}},[t._v("#")]),t._v(" 撤销偏向锁")]),t._v(" "),a("p",[t._v("偏向锁使用了一种"),a("strong",[t._v("等到竞争出现才释放锁的机制")]),t._v("，所以当其他线程尝试竞争偏向锁时， 持有偏向锁的线程才会释放锁。\n偏向锁升级成轻量级锁时，会暂停拥有偏向锁的线程，重置偏向锁标识，这个过程看起来容易，实则开销还是很大的，大概的过程如下：")]),t._v(" "),a("ol",[a("li",[t._v("在一个安全点（在这个时间点上没有字节码正在执行）停止拥有锁的线程。")]),t._v(" "),a("li",[t._v("遍历线程栈，如果存在锁记录的话，需要修复锁记录和Mark Word，使其变成无锁状态。")]),t._v(" "),a("li",[t._v("唤醒被停止的线程，将当前锁升级成轻量级锁。")])]),t._v(" "),a("p",[t._v("所以，如果应用程序里所有的锁通常出于竞争状态，那么偏向锁就会是一种累赘，对于这种情况，我们可以一开始就把偏向锁这个默认功能给关闭：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("-XX:UseBiasedLocking"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("偏向锁的获得和撤销")])]),a("p",{attrs:{align:"center"}},[a("img",{attrs:{width:"600",src:"https://i.loli.net/2020/08/07/78RecPT9uJ1xZCs.png"}})]),a("p"),t._v(" "),a("h3",{attrs:{id:"轻量级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁"}},[t._v("#")]),t._v(" 轻量级锁")]),t._v(" "),a("p",[t._v("多个线程在不同时段获取同一把锁，即不存在锁竞争的情况，也就没有线程阻塞。针对这种情况，JVM采用轻量级锁来避免线程的阻塞与唤醒。")]),t._v(" "),a("h4",{attrs:{id:"轻量级锁的加锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁的加锁"}},[t._v("#")]),t._v(" 轻量级锁的加锁")]),t._v(" "),a("p",[t._v("JVM会为每个线程在当前线程的栈帧中创建用于存储锁记录的空间，我们称为Displaced Mark Word。如果一个线程获得锁的时候发现是轻量级锁，会把锁的Mark Word复制到自己的Displaced Mark Word里面。")]),t._v(" "),a("p",[t._v("然后线程尝试用CAS将锁的Mark Word替换为指向锁记录的指针。如果成功，当前线程获得锁，如果失败，表示Mark Word已经被替换成了其他线程的锁记录，说明在与其它线程竞争锁，当前线程就尝试使用自旋来获取锁。")]),t._v(" "),a("blockquote",[a("p",[t._v("自旋：不断尝试去获取锁，一般用循环来实现。")])]),t._v(" "),a("p",[t._v("自旋是需要消耗CPU的，如果一直获取不到锁的话，那该线程就一直处在自旋状态，白白浪费CPU资源。解决这个问题最简单的办法就是指定自旋的次数，例如让其循环10次，如果还没获取到锁就进入阻塞状态。")]),t._v(" "),a("p",[t._v("但是JDK采用了更聪明的方式——适应性自旋，简单来说就是线程如果自旋成功了，则下次自旋的次数会更多，如果自旋失败了，则自旋的次数就会减少。\n自旋也不是一直进行下去的，如果自旋到一定程度（和JVM、操作系统相关），依然没有获取到锁，称为自旋失败，那么这个线程会阻塞。同时这个锁就会"),a("strong",[t._v("升级成重量级锁")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"轻量级锁的释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁的释放"}},[t._v("#")]),t._v(" 轻量级锁的释放")]),t._v(" "),a("p",[t._v("在释放锁时，当前线程会使用CAS操作将Displaced Mark Word的内容复制回锁的Mark Word里面。如果没有发生竞争，那么这个复制的操作会成功。如果有其他线程因为自旋多次导致轻量级锁升级成了重量级锁，那么CAS操作会失败，此时会释放锁并唤醒被阻塞的线程。\n一张图说明加锁和释放锁的过程：")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{width:"600",src:"https://i.loli.net/2020/08/07/odmFBZvARwTh7WM.png"}})]),t._v(" "),a("h3",{attrs:{id:"重量级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重量级锁"}},[t._v("#")]),t._v(" 重量级锁")]),t._v(" "),a("p",[t._v("重量级锁依赖于操作系统的"),a("strong",[t._v("互斥量（mutex）")]),t._v(" 实现的，而操作系统中线程间状态的转换需要相对比较长的时间，所以重量级锁效率很低，但被阻塞的线程不会消耗CPU。")]),t._v(" "),a("p",[t._v("前面说到，每一个对象都可以当做一个锁，当多个线程同时请求某个对象锁时，对象锁会设置几种状态用来区分请求的线程：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Contention")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("：所有请求锁的线程将被首先放置到该竞争队列\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("："),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Contention")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("中那些有资格成为候选人的线程被移到"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wait")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),t._v("：那些调用wait方法被阻塞的线程被放置到"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wait")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnDeck")]),t._v("：任何时刻最多只能有一个线程正在竞争锁，该线程称为"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnDeck")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Owner")]),t._v("：获得锁的线程称为"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Owner")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Owner")]),t._v("：释放锁的线程\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("当一个线程尝试获得锁时，如果该锁已经被占用，则会将该线程封装成一个ObjectWaiter对象插入到Contention List的队列的队首，然后调用park函数挂起当前线程。")]),t._v(" "),a("p",[t._v("当线程释放锁时，会从Contention List或EntryList中挑选一个线程唤醒，被选中的线程叫做Heir presumptive即假定继承人，假定继承人被唤醒后会尝试获得锁，但synchronized是非公平的，所以假定继承人不一定能获得锁。这是因为对于重量级锁，线程先自旋尝试获得锁，这样做的目的是为了减少执行操作系统同步操作带来的开销。如果自旋不成功再进入等待队列。这对那些已经在等待队列中的线程来说，稍微显得不公平，还有一个不公平的地方是自旋线程可能会抢占了Ready线程的锁。")]),t._v(" "),a("p",[t._v("线程获得锁后调用Object.wait()方法，则会将线程加入到WaitSet中，当被Object.notify唤醒后，会将线程从WaitSet移动到Contention List或EntryList中去。需要注意的是，当调用一个锁对象的wait或notify方法时，"),a("strong",[t._v("如当前锁的状态是偏向锁或轻量级锁则会先膨胀成重量级锁。")])]),t._v(" "),a("h2",{attrs:{id:"总结锁的升级流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结锁的升级流程"}},[t._v("#")]),t._v(" 总结锁的升级流程")]),t._v(" "),a("p",[t._v("每一个线程在准备获取共享资源时： 第一步，检查MarkWord里面是不是放的自己的ThreadId ,如果是，表示当前线程是处于 “偏向锁” 。")]),t._v(" "),a("p",[t._v("第二步，如果MarkWord不是自己的ThreadId，锁升级，这时候，用CAS来执行切换，新的线程根据MarkWord里面现有的ThreadId，通知之前线程暂停，之前线程将Markword的内容置为空。")]),t._v(" "),a("p",[t._v("第三步，两个线程都把锁对象的HashCode复制到自己新建的用于存储锁的记录空间，接着开始通过CAS操作， 把锁对象的MarKword的内容修改为自己新建的记录空间的地址的方式竞争MarkWord。")]),t._v(" "),a("p",[t._v("第四步，第三步中成功执行CAS的获得资源，失败的则进入自旋 。")]),t._v(" "),a("p",[t._v("第五步，自旋的线程在自旋过程中，成功获得资源(即之前获的资源的线程执行完成并释放了共享资源)，则整个状态依然处于 轻量级锁的状态，如果自旋失败 。")]),t._v(" "),a("p",[t._v("第六步，进入重量级锁的状态，这个时候，自旋的线程进行阻塞，等待之前线程执行完成并唤醒自己。")]),t._v(" "),a("h2",{attrs:{id:"各种锁的优缺点对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种锁的优缺点对比"}},[t._v("#")]),t._v(" 各种锁的优缺点对比")]),t._v(" "),a("p",[t._v("下表来自《Java并发编程的艺术》：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("锁")]),t._v(" "),a("th",[t._v("优点")]),t._v(" "),a("th",[t._v("缺点")]),t._v(" "),a("th",[t._v("适用场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("偏向锁")]),t._v(" "),a("td",[t._v("加锁和解锁不需要额外的消耗，和执行非同步方法比仅存在纳秒级的差距。")]),t._v(" "),a("td",[t._v("如果线程间存在锁竞争，会带来额外的锁撤销的消耗。")]),t._v(" "),a("td",[t._v("适用于只有一个线程访问同步块场景。")])]),t._v(" "),a("tr",[a("td",[t._v("轻量级锁")]),t._v(" "),a("td",[t._v("竞争的线程不会阻塞，提高了程序的响应速度。")]),t._v(" "),a("td",[t._v("如果始终得不到锁竞争的线程使用自旋会消耗CPU。")]),t._v(" "),a("td",[t._v("追求响应时间。同步块执行速度非常快。")])]),t._v(" "),a("tr",[a("td",[t._v("重量级锁")]),t._v(" "),a("td",[t._v("线程竞争不使用自旋，不会消耗CPU。")]),t._v(" "),a("td",[t._v("线程阻塞，响应时间缓慢。")]),t._v(" "),a("td",[t._v("追求吞吐量。同步块执行速度较长。")])])])]),t._v(" "),a("p",[a("strong",[t._v("参考文章")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/9932047a89be",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java锁优化--JVM锁降级"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/charlesblc/p/5994162.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java中的锁机制"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/farmerjohngit/myblog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("死磕Synchronized底层实现"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("《Java并发编程的艺术》")])])])}),[],!1,null,null,null);s.default=n.exports}}]);