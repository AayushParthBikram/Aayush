public class TwoThread {
    public static void main(String[] args) {
        StringBuffer sb1 = new StringBuffer();
        StringBuffer sb2 = new StringBuffer();

        Thread t1 = new Thread(()->{
            sb1.append("Apple");
            sb2.append("Mango");
        });

        Thread t2 = new Thread(()->{
            sb1.append("Cake");
            sb2.append("Banana");
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
           
            e.printStackTrace();
        }

        System.out.println("sb1 :" + sb1.toString());
        System.out.println("sb2 :" + sb2.toString());
    }
}
