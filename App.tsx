import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const quickAccess = [
  { key: 'diseases', label: 'Diseases', color: '#dc2626', icon: 'pulse' as const },
  { key: 'medications', label: 'Medications', color: '#2563eb', icon: 'pill' as const },
  { key: 'symptoms', label: 'Symptoms', color: '#10b981', icon: 'stethoscope' as const },
  { key: 'algorithms', label: 'Algorithms', color: '#a855f7', icon: 'source-branch' as const },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>ParaMed</Text>

        <View style={styles.quickActions}>
          <View style={[styles.quickAction, styles.quickActionActive]}>
            <Ionicons name="home" size={16} color="#f8fafc" />
            <Text style={styles.quickActionTextActive}>Home</Text>
          </View>
          <View style={styles.quickAction}>
            <Ionicons name="book-outline" size={16} color="#94a3b8" />
            <Text style={styles.quickActionText}>Guides</Text>
          </View>
          <View style={styles.quickAction}>
            <Ionicons name="calculator-outline" size={16} color="#94a3b8" />
            <Text style={styles.quickActionText}>MedCalc</Text>
          </View>
          <View style={styles.quickAction}>
            <Ionicons name="information-circle-outline" size={16} color="#94a3b8" />
            <Text style={styles.quickActionText}>Info</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color="#6b7280" />
          <Text style={styles.searchText}>Quick search...</Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Access</Text>

        <View style={styles.grid}>
          {quickAccess.map((item) => (
            <View key={item.key} style={[styles.tile, { backgroundColor: item.color }]}>
              <MaterialCommunityIcons name={item.icon} size={32} color="#f8fafc" />
              <Text style={styles.tileText}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.alertCard}>
          <View style={styles.alertHeader}>
            <Ionicons name="alert-circle" size={18} color="#ef4444" />
            <Text style={styles.alertTitle}>Emergency Reference Only</Text>
          </View>
          <Text style={styles.alertBody}>
            This app provides quick reference information for paramedics. Always follow local
            protocols and medical direction.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Most Accessed</Text>

        <View style={styles.listItem}>
          <View style={styles.dotPurple} />
          <View style={styles.listTextWrap}>
            <Text style={styles.listTitle}>Adult Cardiac Arrest</Text>
            <Text style={styles.listSubtitle}>Algorithm</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#64748b" />
        </View>

        <View style={styles.listItem}>
          <View style={styles.dotRed} />
          <View style={styles.listTextWrap}>
            <Text style={styles.listTitle}>Acute Myocardial Infarction</Text>
            <Text style={styles.listSubtitle}>Disease</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#64748b" />
        </View>

        <View style={styles.listItem}>
          <View style={styles.dotBlue} />
          <View style={styles.listTextWrap}>
            <Text style={styles.listTitle}>Epinephrine</Text>
            <Text style={styles.listSubtitle}>Medication</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#64748b" />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="home" size={16} color="#ef111c" />
          <Text style={styles.navTextActive}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="search" size={16} color="#94a3b8" />
          <Text style={styles.navText}>Search</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="book-outline" size={16} color="#94a3b8" />
          <Text style={styles.navText}>Library</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="settings-outline" size={16} color="#94a3b8" />
          <Text style={styles.navText}>Tools</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07090d',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 110,
  },
  headerTitle: {
    color: '#f1f5f9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 14,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  quickAction: {
    width: 70,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#1a1f29',
  },
  quickActionActive: {
    backgroundColor: '#ef111c',
  },
  quickActionText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '600',
  },
  quickActionTextActive: {
    color: '#f8fafc',
    fontSize: 11,
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1f2937',
    backgroundColor: '#121720',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
  },
  searchText: {
    color: '#64748b',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#9ca3af',
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    fontSize: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 14,
  },
  tile: {
    width: '48.5%',
    minHeight: 92,
    borderRadius: 10,
    padding: 12,
    justifyContent: 'space-between',
  },
  tileText: {
    color: '#f8fafc',
    fontWeight: '700',
    fontSize: 13,
  },
  alertCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3f1014',
    backgroundColor: '#170a0c',
    padding: 12,
    marginBottom: 14,
  },
  alertTitle: {
    color: '#fb4b56',
    fontWeight: '700',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  alertBody: {
    color: '#cbd5e1',
    fontSize: 12,
    lineHeight: 18,
  },
  listItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1f2937',
    backgroundColor: '#121720',
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotPurple: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: '#8a18e8',
    marginRight: 10,
  },
  dotRed: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: '#ef111c',
    marginRight: 10,
  },
  dotBlue: {
    width: 10,
    height: 10,
    borderRadius: 99,
    backgroundColor: '#2563eb',
    marginRight: 10,
  },
  listTextWrap: {
    flex: 1,
  },
  listTitle: {
    color: '#e2e8f0',
    fontWeight: '600',
    marginBottom: 2,
  },
  listSubtitle: {
    color: '#94a3b8',
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    backgroundColor: '#0b1017',
    paddingVertical: 10,
    paddingBottom: 14,
  },
  navItem: {
    alignItems: 'center',
    minWidth: 64,
    paddingVertical: 6,
    borderRadius: 8,
  },
  navItemActive: {
    backgroundColor: '#1a0f12',
  },
  navText: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '600',
  },
  navTextActive: {
    color: '#ef111c',
    fontSize: 11,
    fontWeight: '700',
  },
});
